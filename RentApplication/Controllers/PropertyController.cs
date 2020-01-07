using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RentApplication.Models.Interfaces;

namespace RentApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        private readonly IPropertyRepository _propertyRepository;

        public PropertyController(IPropertyRepository propertyRepository)
        {
            _propertyRepository = propertyRepository;
        }
        [HttpGet("[action]")]
        public IActionResult GetProperties()
        {
            return new JsonResult(_propertyRepository.GetAllProperties());
        }
    }
}