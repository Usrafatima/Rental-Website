import Card from '../../components/card';
import image from '../../public/image2 26.png';
import Ellipse from '../../public/Ellipse 38.png';

export default function Residential() {
  return (
    <div className="bg-white min-h-screen py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8">
        Residential Listings
      </h1>
<div className=''>
      <div className="flex flex-wrap  justify-center gap-y-20 px-4">
        <div className="w-full h-[350px] bg-white rounded-xl overflow-hidden">
          <Card
            imageSrc={image}
            price="85,000 LKR / Month"
            house="Luxury Villa in Rego Park"
            description="5 Bedrooms | 2 Bathrooms | 2500 Square FT"
            seller="Anne Liza"
            imageSrc2={Ellipse}
          />
        </div>

        <div className="w-full h-[350px] bg-white rounded-xl overflow-hidden">
          <Card
            imageSrc={image}
            price="85,000 LKR / Month"
            house="Luxury Villa in Rego Park"
            description="5 Bedrooms | 2 Bathrooms | 2500 Square FT"
            seller="Anne Liza"
            imageSrc2={Ellipse}
          />
        </div>
      </div>
    </div>
    </div>
  );
}
