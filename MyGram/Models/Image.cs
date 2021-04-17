using System;
namespace MyGram.Models
{
    public class Image
    {
        //Id, ImagePath, ImageAlt, Description.
        public int Id { get; set; }
        public string  ImagePath { get; set; }
        public string ImageAlt { get; set; }
        public string Descritpion { get; set; }
        public Image()
        {
        }
        public Image(int id, string imagepath, string imagealt, string description) {
            Id = id;
            ImagePath = imagepath;
            ImageAlt = imagealt;
            Descritpion = description;
        }
    }
}
