
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly IActivityRepository _activityRepo;
        private readonly ILogger<BaseApiController> _logger;

        public ActivitiesController(IActivityRepository activityRepo, ILogger<ActivitiesController> logger)
        {
            _activityRepo = activityRepo;
            _logger = logger;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetActivities()
        {
            try
            {
                var activities = await _activityRepo.GetActivities();
                return Ok(activities);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}