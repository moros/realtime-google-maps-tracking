using System;

namespace RealtimeGoogleMapsTracking.Utility
{
    public class AppSettingNotFoundException : ApplicationException
    {
        public string Key { get; set; }

        public AppSettingNotFoundException(string key, string message) : base(message)
        {
            Key = key;
        }
    }
}