using System;
using System.Threading.Tasks;

namespace QuickStart.Core
{
    public class LocalMethods
    {
        public async Task<object> Sum(dynamic input)
        {
            var a = 40;
            var b = 60;
            var c = a + b;
            return c;
        }

        public async Task<object> Substract(dynamic input)
        {
            var a = 30;
            var b = 60;
            var c = b - a;
            return c;
        }

        public async Task<object> GetCurrentTime(dynamic input)
        {
            return DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
        }

        public async Task<object> UseDynamicInput(dynamic input)
        {
            return $".NET Core welcomes {input}";
        }
    }
}
