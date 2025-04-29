import Card from '../components/card';
import Image from 'next/image';
import image from '../public/image 24.png';
import image2 from '../public/image2 26.png';
import image3 from '../public/image3 27.png';
import Link from 'next/link';
import Ellipse from '../public/Ellipse 38.png';


export default function Home() {
  return (
    <div className='bg-white'>
  <div className="flex justify-center">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-10">
    Featured Listings
  </h1>
</div>
      <div className="flex flex-wrap justify-center mt-10 gap-12 px-4">
        <Link href="/category/residential">
          <button className="border-2 bg-gray-400 rounded-3xl text-white w-[130%] sm:w-[120%] md:w-[120%] lg:w-[130%] h-10 hover:bg-red-500">
            Residential Spaces
          </button>
        </Link>
        <Link href="/category/sports">
          <button className="border-2 bg-gray-400 rounded-3xl text-white w-[120%] sm:w-[120%] md:w-[120%] lg:w-[130%] h-10 hover:bg-red-500">
            Sports Venue
          </button>
        </Link>
        <Link href="/category/car">
          <button className="border-2 bg-gray-400 rounded-3xl text-white w-[200%] sm:w-[150%] md:w-[130%] lg:w-[150%] h-10 hover:bg-red-500">
            Cars
          </button>
        </Link>
      </div>

      {/* Cards Section */}
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex flex-wrap justify-center items-center gap-6 mt-12 px-4 bg-white py-6"
        >
          <Card
            imageSrc={image}
            price="85,000 LKR / Month"
            house="Luxury Villa in Rego Park"
            description="5 Bedrooms | 2 Bathrooms | 2500 Square FT"
            seller="Anne Liza"
            imageSrc2={Ellipse}
          />
          <Card
            imageSrc={image2}
            price="75,000 LKR / Month"
            house="Luxury Villa in Rego Park"
            description="3 Bedrooms | 2 Bathrooms | 2500 Square FT"
            seller="Anne Liza"
            imageSrc2={Ellipse}
          />
          <Card
            imageSrc={image3}
            price="85,000 LKR / Month"
            house="Luxury Villa in Rego Park"
            description="3 Bedrooms | 2 Bathrooms | 2500 Square FT"
            seller="Anne Liza"
            imageSrc2={Ellipse}
          />
        </div>
      ))}
    </div>
  );
}
