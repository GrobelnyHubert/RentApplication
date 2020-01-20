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
    public class OwnerController : ControllerBase
    {
        private readonly IOwnerRepository _ownerRepository;

        public OwnerController(IOwnerRepository ownerRepository)
        {
            _ownerRepository = ownerRepository;
        }

        [HttpPost("[action]")]
        public IActionResult AddOwner([FromBody] Owner owner)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
         
            return new JsonResult(_ownerRepository.AddOwner(owner));
        }
        [HttpGet("[action]")]
        public IActionResult GetOwners()
        {
            return new JsonResult(_ownerRepository.GetAll());
        }
        [HttpPost("[action]")]
        public IActionResult UpdateOwner([FromBody] Owner owner)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _ownerRepository.UpdateOwner(owner);
            return new JsonResult(owner.Id);
        }
        [HttpGet("[action]")]
        public IActionResult GetOwner(int ownerId)
        {
            if(ownerId <= 0)
            {
                return BadRequest("Incorect owner id");
            }
            return new JsonResult(_ownerRepository.GetOwner(ownerId));
        }
    }
}