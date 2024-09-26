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
    position: "Project Manager",
    img_url:
      "https://i.ibb.co.com/fQBrGr2/lovepik-confident-business-women-png-image-400615903-wh1200.png",
    stars: 4,
    disc: `Booking meeting rooms through this platform has made my team’s workflow so much smoother. The real-time availability feature is a lifesaver for last-minute meetings.`,
  },
  {
    name: "David Kim",
    position: "Creative Director",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `I love the flexibility and ease of booking rooms for brainstorming sessions. The platform is user-friendly, and the spaces are always well-maintained.`,
  },
  {
    name: "Emily Parker",
    position: "Marketing Consultant",
    img_url:
      "https://i.ibb.co.com/BVgMHYc/lovepik-business-women-png-image-401866621-wh1200.png",
    stars: 5,
    disc: `The booking process is incredibly smooth. The variety of room sizes and amenities offered is perfect for both small meetings and large workshops.`,
  },
  {
    name: "Michael Brown",
    position: "Software Engineer",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 4,
    disc: `The rooms are great for team discussions, and I appreciate the availability of tech equipment. The only thing I wish for is more availability during peak hours.`,
  },
  {
    name: "Rachel Green",
    position: "Freelancer",
    img_url:
      "https://i.ibb.co.com/BVgMHYc/lovepik-business-women-png-image-401866621-wh1200.png",
    stars: 5,
    disc: `Perfect platform for freelancers like me! I can easily find and book meeting rooms for client calls. The process is quick, and the spaces are professional.`,
  },
  {
    name: "James Lee",
    position: "Startup Founder",
    img_url:
      "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
    stars: 5,
    disc: `This platform has been a game-changer for hosting investor meetings. The rooms are well-equipped, and the instant confirmation gives me peace of mind.`,
  },
  {
    name: "Laura Davis",
    position: "Operations Manager",
    img_url:
      "https://i.ibb.co.com/fQBrGr2/lovepik-confident-business-women-png-image-400615903-wh1200.png",
    stars: 3,
    disc: `Good platform, but I’ve had a few issues with room availability during peak times. Otherwise, the booking experience is quite convenient.`,
  },
  {
    name: "Luise Davis",
    position: "Project Manager",
    img_url:
      "https://i.ibb.co.com/fQBrGr2/lovepik-confident-business-women-png-image-400615903-wh1200.png",
    stars: 4,
    disc: `The rooms are great for team discussions, and I appreciate the availability of tech equipment. The only thing I wish for is more availability during peak hours.`,
  },
];

const Reviews = () => {
  return (
    <div className="py-10 xl:px-16 lg:px-16 md:px-10 px-7">
      <h2 className="font-bold text-4xl text-indigo-600">Customer Review</h2>
      <p className="mb-4 text-gray-700">
        See what our customers are saying about us
      </p>
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
    <div className="w-full h-full mx-auto bg-gray-100 border border-indigo-400 p-6 rounded-lg">
      {/* Header with quote and stars */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-4xl text-indigo-500 opacity-70">
          <BiSolidQuoteLeft className="text-indigo-500" />
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
