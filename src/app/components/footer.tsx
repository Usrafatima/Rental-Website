import Image from "next/image";
import logo from '../public/logo 1.png';
import linkedin from '../public/linkedin.png';
import fb from '../public/fb.png';
import twitter from '../public/twitter.png';
import insta from '../public/insta.png';

export default function Footer() {
  return (
    <div className="">
    <footer id="contact" className="bg-[#F4F4F4] py-10 ">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     
        <div>
          <div className="flex items-center space-x-4">
            <Image src={logo} width={100} height={100} alt="Logo" className="w-20" />
            <p className="text-sm">
              Sri Lanka's first & largest platform designed to create an online marketplace exclusively for RENT
            </p>
          </div>
          <div className="flex space-x-3 mt-4">
            <Image src={linkedin} width={30} height={30} alt="LinkedIn" className="w-8 h-8 rounded-full border-2" />
            <Image src={fb} width={30} height={30} alt="Facebook" className="w-8 h-8 rounded-full border-2" />
            <Image src={twitter} width={30} height={30} alt="Twitter" className="w-8 h-8 rounded-full border-2" />
            <Image src={insta} width={30} height={30} alt="Instagram" className="w-8 h-8 rounded-full border-2" />
          </div>
        </div>

       
        <div>
          <h2 className="text-lg font-bold text-red-500 mb-4">Navigation</h2>
          <ul className="space-y-3 text-sm">
            <li>About Us</li>
            <li>Blog</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-lg font-bold text-red-500 mb-4">Featured Locations</h2>
          <ul className="space-y-3 text-sm">
            <li>Kandy</li>
            <li>Anuradhapura</li>
            <li>Badulla</li>
            <li>Colombo</li>
            <li>Kaluthara</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-red-500 mb-4">Help</h2>
          <ul className="space-y-3 text-sm">
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="bg-white py-6 mt-10">
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold text-red-500 mb-2 text-center">Subscribe to Our Newsletter</h2>
          <p className="text-sm mb-4 text-center">Stay updated with the latest listings and rental tips.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border-2 rounded-3xl w-full sm:w-[300px] h-[40px] px-4"
            />
            <button className="bg-red-500 text-white rounded-3xl w-[120px] h-[40px]">Submit</button>
          </form>
        </div>
      </div>
    </footer>
    </div>
  );
}
