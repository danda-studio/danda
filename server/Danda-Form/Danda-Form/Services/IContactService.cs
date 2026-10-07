using Danda_Form.Services.Models;

namespace Danda_Form.Services
{
    public interface IContactService
    {
        Task<SendContactResponse> SendContact(SendContactRequest request);
    }
}
