
namespace Danda_Form.Services.Models
{
    public class SendContactRequest
    {
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Budget { get; set; } = string.Empty;
        public ContactType ContactType { get; set; }
        public string ContactValue { get; set; } = string.Empty;
        //public string TurnstileToken { get; set; } = string.Empty;
        public IFormFile? File { get; set; }
    }
}
