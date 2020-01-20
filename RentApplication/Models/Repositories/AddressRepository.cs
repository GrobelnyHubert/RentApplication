using RentApplication.Models.Database;
using RentApplication.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentApplication.Models.Repositories
{
    public class AddressRepository : IAddressRepository
    {
        private readonly DatabaseContext _databaseContext;

        public AddressRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }
        public int AddAddress(Address address)
        {
            if (address == null)
            {
                throw new Exception("Address object cannot be null.");
            }
            _databaseContext.Adresses.Add(address);
            _databaseContext.SaveChanges();
            return address.AddressId;
        }

        public Address GetAddress(int addressId)
        {
            if (addressId <= 0)
            {
                throw new Exception("Address Id cannt be less than 0.");
            }
            return _databaseContext.Adresses.Where(address => address.AddressId == addressId).FirstOrDefault();
        }
        public List<Address> GetAll()
        {
            return _databaseContext.Adresses.ToList();
        }
        public int UpdateAddress(Address address)
        {
            if (address == null)
            {
                throw new Exception("Obcject address cannot be null.");
            }
            _databaseContext.Adresses.Update(address);
            _databaseContext.SaveChanges();
            return address.AddressId;
        }
    }
}
