using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyGram.Models;

namespace MyGram.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public RegistrationData validatesInfo(String username, String password) {
            
            return new RegistrationData() {
                UserName = username,
                Password = password,
                Message = "User has been registered successfully"

            };
        }

        [HttpGet]
        public List<Image> getImages()
        {
            //int id, string imagepath, string imagealt, string description
            var image = new Image(1, "imagepath","imagealt","description");
            var listOfImages = new List<Image>();
            for(var i = 1; i < 21; i++)
            {
                image = new Image(i, "imagepath" + i, "imagealt" + i, "Image " + i);
                listOfImages.Add(image);
            }
            return listOfImages;
        }
    }
}
