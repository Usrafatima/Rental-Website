import Image from "next/image";
import young from '../app/public/young-family-with-kids-travelling-by-car-stopped-field 1.png';
import Searchbar from './components/searchbar';
import kandy from '../app/public/kandy.png';
import andrapudha from '../app/public/andrapudha.png';
import badulla from '../app/public/badulla.png';
import gampha from '../app/public/gampha.png';
import jaffna from '../app/public/jaffna.png';
import colombo from '../app/public/colombo.png';
import blog from '../app/public/blog.png';


export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={young}
          alt="Hero Image"
          className="w-full object-cover xl:h-[800px] sm:h-[500px] h-[300px]"
          width={2000}
          height={800}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black sm:mt-[20%] xl:mt-0">
          <h1 className="text-3xl sm:text-4xl xl:text-4xl font-bold text-center">
            Discover Your Perfect Rental
          </h1>
          <p className="text-sm sm:text-lg xl:text-xl text-center mt-2">
            Rent Cars, Houses, and Items in Just a Few Clicks
          </p>
          <div className="hidden sm:flex flex-wrap justify-center sm:mt-4 xl:mt-[18px] space-x-4 sm:space-x-6">
            <p className="border-2 border-red-700 rounded-xl bg-red-700 text-white text-center py-2 w-[90px] sm:w-[120px]">
              Houses
            </p>
            <p className="border-2 border-white rounded-xl bg-white text-black text-center py-2 w-[90px] sm:w-[120px]">
              Rides
            </p>
            <p className="border-2 border-white rounded-xl bg-white text-black text-center py-2 w-[90px] sm:w-[120px]">
              Things
            </p>
          </div>
          <Searchbar />
        </div>
      </div>

      {/* Categories Section */}
      <div className="my-8 bg-white">
        <h1
          id="category"
          className="text-center text-2xl sm:text-3xl xl:text-3xl font-bold"
        >
          Browse from Top Categories
        </h1>
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          <p className="border-2 bg-gray-500 text-white w-36 h-9 rounded-2xl text-center pt-1">
            Holiday Rentals
          </p>
          <p className="border-2 bg-gray-500 text-white w-40 h-9 rounded-2xl text-center pt-1">
            Residential Spaces
          </p>
          <p className="border-2 bg-gray-500 text-white w-36 h-9 rounded-2xl text-center pt-1">
            Event Spaces
          </p>
          <p className="border-2 bg-gray-500 text-white w-48 h-9 rounded-2xl text-center pt-1">
            Commercial Properties
          </p>
          <p className="border-2 bg-gray-500 text-white w-24 h-9 rounded-2xl text-center pt-1">
            More
          </p>
        </div>
      </div>


      <section className="featured-locations py-10 bg-white">
        <div className="max-w-7xl mx-auto px-2">
          <h2 className="text-3xl sm:text-4xl xl:text-4xl font-bold text-center mb-6">
            Featured Locations
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="relative group col-span-1 row-span-2">
              <Image
                src={kandy}
                alt="Kandy"
                className="w-full h-[400px] sm:h-[500px] xl:h-[500px] object-cover rounded-lg shadow-lg group-hover:opacity-80"
              />
              <div className="absolute bottom-4 left-4 text-black font-bold">Kandy</div>
            </div>
            <div className="relative group">
              <Image
                src={andrapudha}
                alt="Anuradhapura"
                className="w-full h-64 sm:h-[400px] xl:h-[400px] object-cover rounded-lg shadow-lg group-hover:opacity-80"
              />
              <div className="absolute bottom-4 left-4 text-black font-bold">Anuradhapura</div>
            </div>
            <div className="relative group col-span-1 row-span-2">
              <Image
                src={badulla}
                alt="Badulla"
                className="w-full h-64 sm:h-[400px] xl:h-[400px] object-cover rounded-lg shadow-lg group-hover:opacity-80"
              />
              <div className="absolute -mt-7 left-4 text-black font-bold">Badulla</div>
            </div>
            <div className="relative group col-span-1 row-span-2">
              <Image
                src={colombo}
                alt="Gampaha"
                className="w-full h-[500px] sm:h-[400px] xl:h-[500px] object-cover rounded-lg shadow-lg group-hover:opacity-80"
              />
              <div className="absolute bottom-4 left-4 text-black font-bold">Colombo</div>
            </div>
            <div className="relative group">
              <Image
                src={jaffna}
                alt="Jaffna"
                className="w-full h-64 sm:h-[400px] xl:h-[400px] object-cover rounded-lg shadow-lg group-hover:opacity-80"
              />
              <div className="absolute bottom-4 left-4 text-black font-bold">Jaffna</div>
            </div>
            <div className="relative group">
              <Image
                src={gampha}
                alt="Kandy"
                className="w-full h-64 sm:h-[400px] xl:h-[400px] object-cover rounded-lg shadow-lg group-hover:opacity-80"
              />
              <div className="absolute bottom-4 left-4 text-black font-bold">Gampha</div>
            </div>
          </div>
        </div>
      </section>

     
      <div className="bg-[#F4F4F4] py-16">
        <h1 className="text-center text-4xl sm:text-4xl xl:text-4xl font-bold">
          Insights and Performance Metrics
        </h1>
        <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 mt-8 gap-4">
  <div className="border-2 bg-gray-900 w-full sm:w-[15%] text-white h-[110px] rounded-lg text-center pt-4">
    <span className="text-3xl font-bold">5000+</span>
    <br />
    <span className="text-[1rem]">Total listings in the system</span>
  </div>
  <div className="border-2 bg-gray-900 w-full sm:w-[15%] text-white h-[110px] rounded-lg text-center pt-4">
    <span className="text-3xl font-bold">1000+</span>
    <br />
    <span className="text-[1rem]">Active Listings</span>
  </div>
  <div className="border-2 bg-gray-900 w-full sm:w-[15%] text-white h-[110px] rounded-lg text-center pt-4">
    <span className="text-3xl font-bold">30+</span>
    <br />
    <span className="text-[1rem]">Articles in the Blog</span>
  </div>
</div>


      <div id="blog">
        <h1 className="text-center text-2xl sm:text-3xl xl:text-3xl mt-8 font-bold">
          Important Articles
        </h1>
        <div className="w-32 h-1 bg-red-500 mx-auto mb-8 "></div>
        <div className="xl:ml-[30%]">
          <Image
            src={blog}
            width={700}
            height={100}
            alt="blog-main"
            className="mx-auto sm:w-full xl:w-[700px] ml-[1%]" 
          />
          <p className="mx-16 mt-2 text-red-500">February 4, 2024</p>
          <h2 className="mx-16 text-[1.2rem] font-bold">
            Top Tips for Finding the Perfect Rental Property
          </h2>
    
        </div>
      </div>
      </div>
      </div>
  )}