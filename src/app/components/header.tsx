import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo 1.png';


export default function Header() {
  return (
<div className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md">
 
  <div className="flex items-center space-x-3">
    <Image src={logo} width={50} height={50} alt="main-logo" className="w-24" />
  </div>

 
  <div className="block sm:block">
    <ul className="flex justify-center items-center space-x-6 text-gray-700 px-6">
      <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
      <li><Link href="/category" className="hover:text-blue-500">Rentals</Link></li>
      <li className="hidden sm:block"><Link href="#category" className="hover:text-blue-500">Categories</Link></li>
      <li className="hidden sm:block"><Link href="#about" className="hover:text-blue-500">About Us</Link></li>
      <li><Link href="#contact" className="hover:text-blue-500">Contact</Link></li>
      <li className="hidden sm:block"><Link href="#blog" className="hover:text-blue-500">Blog</Link></li>
    </ul>
  </div>

  <div className="flex space-x-4">
    <button className="px-4 py-2 text-red-700 hidden sm:block">
      Sign in
    </button>
    <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-blue-600 hidden sm:block">
      + Post Listing
    </button>
  </div>
</div>
  )}
