namespace Danda_Form.Services.Models
{
    public class EmailSetting
    {
        public string SmtpServer { get; set; } = string.Empty;
        public int SmtpPort { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public List<string> Recipients { get; set; } = new List<string>();
    }
}
