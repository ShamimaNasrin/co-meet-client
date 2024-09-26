import "./styles/review.css";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { TiStar } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

type TClient = {
  name: string;
  position: string;
  img_url: string;
  stars: number;
  disc: string;
};
type TProp = {
  client: TClient;
};

const clients: TClient[] = [
  {
    name: "Sarah Thompson",
    position: "IT Specialist",
    img_url:
      "https://i.ibb.co.com/fQBrGr2/lovepik-confident-business-women-png-image-400615903-wh1200.png",
    stars: 4,
    disc: `This keyboard is amazing for long coding sessions. The tactile feel and the build quality are impressive. Highly recommend for developers!`,
  },
  {
    name: "David Kim",
    position: "Graphic Designer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `I love the RGB lighting and the smooth key travel. It has become my go-to keyboard for both work and gaming.`,
  },
  {
    name: "Emily Parker",
    position: "Tech Blogger",
    img_url:
      "https://i.ibb.co.com/BVgMHYc/lovepik-business-women-png-image-401866621-wh1200.png",
    stars: 5,
    disc: `This mechanical keyboard has exceeded my expectations. The build is solid and the switches are incredibly responsive. Perfect for enthusiasts!`,
  },
  {
    name: "Michael Brown",
    position: "Software Engineer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 4,
    disc: `A great keyboard for programming. The keys feel sturdy and responsive, though I wish the wrist rest was a bit more comfortable.`,
  },
  {
    name: "Rachel Green",
    position: "Freelancer",
    img_url:
      "https://i.ibb.co.com/BVgMHYc/lovepik-business-women-png-image-401866621-wh1200.png",
    stars: 5,
    disc: `The keyboard is top-notch! I’ve been using it for my freelance work, and it’s both stylish and functional. Absolutely worth every penny.`,
  },
  {
    name: "James Lee",
    position: "Gamer & Streamer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `Best keyboard I've ever used for gaming. The feedback from the keys is perfect, and the customizable backlighting is great for night sessions.`,
  },
  {
    name: "Laura Davis",
    position: "System Administrator",
    img_url:
      "https://i.ibb.co.com/fQBrGr2/lovepik-confident-business-women-png-image-400615903-wh1200.png",
    stars: 3,
    disc: `Good keyboard, but I found the keycaps a bit slippery after extended use. The functionality is great, but it could use a better grip.`,
  },
];

const Reviews = () => {
  return (
    <div className="py-10 xl:px-16 lg:px-16 md:px-10 px-7">
      <h2 className="font-bold text-4xl mb-4">Customer Review</h2>
      <br />

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {clients.map((client, i) => (
          <SwiperSlide key={i}>
            <CustomerCard client={client} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const CustomerCard = ({ client }: TProp) => {
  const { name, position, img_url, stars, disc } = client;

  return (
    <div className="w-full h-full mx-auto bg-gray-100  p-6  rounded-lg shadow-md">
      {/* Header with quote and stars */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-4xl text-teal-400 opacity-70">
          <BiSolidQuoteLeft className="text-black" />
        </span>
        <div className="flex items-center justify-center">
          <span className="text-yellow-500 text-sm ">{stars}</span>
          <TiStar className="text-yellow-500" />
        </div>
      </div>

      <p className="text-sm mb-6">{disc}</p>

      {/* Footer: Client image and details */}
      <div className="flex items-center gap-4">
        <img
          src={img_url}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="text-black">
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-xs text-gray-700">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
