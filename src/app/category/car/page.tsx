import Card from '../../components/card';
import Image from 'next/image';
import firstcar from '../../public/firstcar.jpg';
import Ellipse from '../../public/Ellipse 38.png';
import honda from '../../public/honda.jpeg';
import ford from '../../public/ford.jpeg';
import hyundai from '../../public/hyundai - Copy.jpeg';
import malibu from '../../public/mailbu.jpeg';
import corolla from '../../public/corolla.jpeg';


export default function Car() {
  return (
    <div className="bg-white min-h-screen py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8">
        Available Cars
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-6 px-4 py-6">
        <Card
          imageSrc={firstcar}
          price="$100 / Day"
          house="Toyota RAV4 2023"
          description="5 seats | Automatic | Hybrid"
          seller="Anne Liza"
          imageSrc2={Ellipse}
        />
        <Card
          imageSrc={honda}
          price="$45 / Day"
          house="Honda Civic 2023"
          description="5 seats | Automatic | Gasoline"
          seller="Anne Liza"
          imageSrc2={Ellipse}
        />
        <Card
          imageSrc={ford}
          price="$90 / Day"
          house="Ford Mustang 2023"
          description="2 seats | Manual or Automatic | Gasoline"
          seller="Anne Liza"
          imageSrc2={Ellipse}
        />
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 px-4 py-6">
        <Card
          imageSrc={hyundai}
          price="$45 / Day"
          house="Hyundai Elantra 2023"
          description="5 seats | Automatic | Gasoline"
          seller="Anne Liza"
          imageSrc2={Ellipse}
        />
        <Card
          imageSrc={malibu}
          price="$55 / Day"
          house="Chevrolet Malibu 2023"
          description="5 seats | Automatic | Gasoline"
          seller="Anne Liza"
          imageSrc2={Ellipse}
        />
        <Card
          imageSrc={corolla}
          price="$40 / Day"
          house="Toyota Corolla 2023"
          description="5 seats | Automatic | Gasoline"
          seller="Anne Liza"
          imageSrc2={Ellipse}
        />
      </div>
    </div>
  );
}
