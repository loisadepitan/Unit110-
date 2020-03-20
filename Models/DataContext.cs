using Microsoft.EntityFrameworkCore;



namespace Rental.Models{

    /*
    this class will handle the connection to DB and helps to retrieve/store/update data
    If something changes on the model /tables, exc: 
    dotnet ef migrations add <someName>
    dotnet ef database update*/
    public class DataContext : DbContext{
        public DataContext(DbContextOptions<DataContext> Options) : base(Options){

        } 

        //specify which models need to be converted into DB tables

        public DbSet<Car> Cars {get; set;}

    }
}

    
