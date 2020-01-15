﻿using System;
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
        [HttpGet("[action]")]
        public IActionResult GetAddresses()
        {
            return new JsonResult(_addressRepository.GetAll());
        }
        [HttpPost("[action]")]
        public IActionResult UpdateAddress([FromBody] Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _addressRepository.UpdateAddress(address);
            return new JsonResult(address.AddressId);
        }
        [HttpGet("[action]")]
        public IActionResult GetAddress(int addressId)
        {
            if(addressId <= 0)
            {
                return BadRequest("Incorect address id.");
            }
            return new JsonResult(_addressRepository.GetAddress(addressId));
        }
    }
}