﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentApplication.Models.Interfaces
{
    public interface IAddressRepository
    {
        int AddAddress(Address address);
        Address GetAddress(int addressId);
    }
}
