using Danda_Form.Services;
using Danda_Form.Services.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.RateLimiting;

namespace Danda_Form.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;
        //private readonly ITurnstileService _turnstileService;

        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpPost("contact")]
        public async Task<ActionResult<SendContactResponse>> SendContact([FromForm] SendContactRequest request)
        {

            //var remoteIp = HttpContext.Request.Headers["CF-Connecting-IP"].FirstOrDefault()
            //?? HttpContext.Connection.RemoteIpAddress?.ToString()
            //?? "unknown";
            //if (!await _turnstileService.VerifyAsync(request.TurnstileToken, remoteIp))
            //    return BadRequest(new SendContactResponse { Success = false, Message = "Проверка на робота не пройдена" });

            var result = await _contactService.SendContact(request);
            return Ok(result);

        }
    }
}
