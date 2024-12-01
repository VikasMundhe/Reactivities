using  Entities;

public interface IActivityRepository
{
    public Task<IEnumerable<Activity>> GetActivities();
}