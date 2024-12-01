using System.Diagnostics;
using Dapper;
using Entities;
public class ActivityRepository:IActivityRepository
{
    private readonly DapperContext _context;

    public ActivityRepository(DapperContext context)
    {
        _context = context;
    }
    public async Task<IEnumerable<Entities.Activity>> GetActivities()
    {
        var query = "Select * from dbo.Activity";

        using (var connection = _context.CreateConection())
        {
            var activities = await connection.QueryAsync<Entities.Activity>(query);
            return activities.ToList();
        }
    }
    
}