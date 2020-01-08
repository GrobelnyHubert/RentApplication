using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RentApplication.Models;
using RentApplication.Models.Interfaces;

namespace RentApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressesController : ControllerBase
    {
        private readonly IAddressRepository _addressRepository;
         public AddressesController(IAddressRepository addressRepository)
        {
            _addressRepository = addressRepository;
        }
        [HttpPost("[action]")]
        public IActionResult AddAdress([FromBody] Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _addressRepository.AddAddress(address);
            return new JsonResult(address.AddressId);
        }
    }
}