using Microsoft.EntityFrameworkCore.Migrations;

namespace RentApplication.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Owners (Name,Surname,Phone) VALUES('Tomasz','Adamek','885 445 551')");
            migrationBuilder.Sql("INSERT INTO Owners (Name,Surname,Phone) VALUES('Michal','Mical','885 123 872')");
            migrationBuilder.Sql("INSERT INTO Owners (Name,Surname,Phone) VALUES('Adrian','Sowa','885 587 456')");

            migrationBuilder.Sql("INSERT INTO Adresses (Street,City) VALUES('Rzeszów','3 maja')");
            migrationBuilder.Sql("INSERT INTO Adresses (Street,City) VALUES('Warszawa','Lwowska')");
            migrationBuilder.Sql("INSERT INTO Adresses (Street,City) VALUES('Gdansk','Pilsudzkiego')");

            migrationBuilder.Sql("INSERT INTO Properties (Type,Description,Rooms,Area,Washer,Refigerator,Iron,AddressId,OwnerId) VALUES(0,'Opis test',6,170,1,1,1,1,1)");
            migrationBuilder.Sql("INSERT INTO Properties (Type,Description,Rooms,Area,Washer,Refigerator,Iron,AddressId,OwnerId) VALUES(1,'Opis test2',2,130,1,1,1,2,2)");
            migrationBuilder.Sql("INSERT INTO Properties (Type,Description,Rooms,Area,Washer,Refigerator,Iron,AddressId,OwnerId) VALUES(1,'Opis test3',10,100,0,1,1,3,3)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
   
        }
    }
}
