using System.Web;
using System.Web.Routing;
using RealtimeGoogleMapsTracking.AppStart;

namespace RealtimeGoogleMapsTracking
{
    public class Global : HttpApplication
    {
        protected void Application_Start()
        {
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}