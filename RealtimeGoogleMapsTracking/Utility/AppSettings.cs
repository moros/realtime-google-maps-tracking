using System.ComponentModel;
using System.Configuration;

namespace RealtimeGoogleMapsTracking.Utility
{
    public static class AppSettings
    {
        public static TValue Get<TValue>(string key)
        {
            var appsetting = ConfigurationManager.AppSettings[key];
            if (string.IsNullOrEmpty(appsetting))
                throw new AppSettingNotFoundException(key, $"Did not find appsetting for key: {key}.");

            var converter = TypeDescriptor.GetConverter(typeof(TValue));
            return (TValue) converter.ConvertFromInvariantString(appsetting);
        }
    }
}