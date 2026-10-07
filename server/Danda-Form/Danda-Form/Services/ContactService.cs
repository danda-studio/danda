
using Danda_Form.Services.Models;
using Danda_Form.Validator;
using Microsoft.Extensions.Options;
using System.Net;
using System.Net.Http.Headers;
using System.Net.Mail;
using System.Text;
using System.Text.Json;

namespace Danda_Form.Services
{
    public class ContactService : IContactService
    {
        private readonly EmailSetting _emailSetting;
        private readonly IHostEnvironment _environment;

        public ContactService(IOptions<EmailSetting> emailOptions, IHostEnvironment environment)
        {
            _emailSetting = emailOptions.Value;
            _environment = environment;
        }

        public async Task<SendContactResponse> SendContact(SendContactRequest request)
        {
            if (!ContactValidator.ValidateName(request.Name, out var nameError))
                return new SendContactResponse { Success = false, Message = nameError };
            if (!ContactValidator.ValidateContactValue(request.ContactValue, out var addressError))
                return new SendContactResponse { Success = false, Message = addressError };

            var response = new SendContactResponse();

            //if (!_environment.IsProduction())
            //{
            //    response.Success = true;
            //    response.Message = "Сообщение отправлено";
            //    return response;
            //}

            var mailMessage = await SendEmailMessage(request);

            if (string.IsNullOrEmpty(mailMessage))
            {
                response.Success = false;
                response.Message = $"Email: {mailMessage}";
            }

            return response;


        }

        public async Task<string> SendEmailMessage(SendContactRequest request)
        {
            try
            {
                using var client = new SmtpClient(_emailSetting.SmtpServer, _emailSetting.SmtpPort)
                {
                    EnableSsl = true,
                    Credentials = new NetworkCredential(_emailSetting.Email, _emailSetting.Password),
                    UseDefaultCredentials = false,
                    DeliveryMethod = SmtpDeliveryMethod.Network
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(_emailSetting.Email),
                    Subject = $"Новая заявка от {request.Name}",
                    Body = FormatHtmlEmail(request),
                    IsBodyHtml = true,
                    BodyEncoding = Encoding.UTF8,
                    SubjectEncoding = Encoding.UTF8
                };

                if (request.File != null)
                {
                    var stream = request.File.OpenReadStream();
                    mailMessage.Attachments.Add(new Attachment(stream, request.File.FileName));
                }

                if (_emailSetting.Recipients != null && _emailSetting.Recipients.Count != 0)
                {
                    foreach (var recipient in _emailSetting.Recipients)
                    {
                        if (!string.IsNullOrWhiteSpace(recipient))
                            mailMessage.To.Add(recipient.Trim());
                    }
                }
                else
                {
                    mailMessage.To.Add(_emailSetting.Email);
                }

                await client.SendMailAsync(mailMessage);
                return "OK";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        private static string FormatHtmlEmail(SendContactRequest request)
        {
            //var contactType = request.ContactType switch
            //{
            //    ContactType.Telegram => "Telegram",
            //    ContactType.WhatsApp => "WhatsApp",
            //    ContactType.Email => "Email",
            //    _ => "Не указан"
            //};

            return
                "<h2>Новая заявка</h2>" +
                "<hr>" +
                $"<b>Имя:</b> {request.Name}<br>" +
                $"<b>Описание задачи:</b> {request.Description}<br>" +
                $"<b>Бюджет:</b> {request.Budget}<br>" +
                $"<b>Способ связи:</b> {request.ContactType}<br>" +
                $"<b>Контакт:</b> {request.ContactValue}<br>" +
                "<hr>" +
                $"<b>Дата обращения:</b> {DateTime.Now:yyyy-MM-dd HH:mm:ss}";
        }
    }
}

       