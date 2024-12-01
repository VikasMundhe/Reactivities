using System.Data;
using Microsoft.Data.SqlClient;

public class DapperContext
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionstring;

    public DapperContext(IConfiguration configuration)
    {
        _configuration = configuration;
        _connectionstring = _configuration.GetConnectionString("SqlConnection");
               
    }
    public IDbConnection CreateConection()
        => new SqlConnection(_connectionstring);
}