import { useEffect } from "react";
import useTitle from "../../customHooks/useTitle";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  image: string;
  designation: string;
  bio: string;
}

const teamMembers = [
  {
    name: "John Doe",
    image: team1,
    designation: "CEO & Founder",
    bio: "John is a full-stack developer with over 10 years of experience. He specializes in React and Node.js.",
  },
  {
    name: "Jane Smith",
    image: team3,
    designation: "CTO",
    bio: "Jane is a UX/UI designer passionate about creating intuitive and user-friendly interfaces.",
  },
  {
    name: "Michael Lee",
    image: team2,
    designation: "Project Lead",
    bio: "Michael is a project manager with expertise in leading agile teams and ensuring timely delivery of projects.",
  },
];

const About = () => {
  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("About");
  return (
    <div className="  min-h-screen xl:py-12 xl:px-16 lg:py-12 lg:px-16 md:p-8 sm:p-5 p-5 ">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold text-violet-600 text-center"
      >
        About Us
      </motion.h2>
      <div className="my-5">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p>
          Our mission is to transform how co-working spaces are managed by
          streamlining the room booking experience. We are dedicated to
          providing businesses, freelancers, and entrepreneurs with an intuitive
          platform that enhances productivity and fosters collaboration. By
          leveraging cutting-edge technology and focusing on user needs, we aim
          to make booking and managing workspaces easy, efficient, and
          accessible to everyone.
        </p>
      </div>

      <div className="my-10 mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Meet the Team</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:px-8 lg:px-8"
        >
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              image={member.image}
              designation={member.designation}
              bio={member.bio}
            />
          ))}
        </motion.div>
      </div>

      <div className="my-5">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p>
          Our story started with a straightforward goal: to simplify access to
          co-working spaces and make them more efficient. As founders who
          frequently faced challenges with booking meeting rooms, we realized
          there was room for improvement. What began as a small initiative has
          grown into a comprehensive platform that now supports thousands of
          users. By refining the booking process, we've enabled businesses to
          concentrate on what's most important—achieving their goals and driving
          success.
        </p>
      </div>
    </div>
  );
};

const TeamCard: React.FC<TeamMemberProps> = ({
  name,
  image,
  designation,
  bio,
}) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden justify-self-center">
      <div className="flex justify-center mt-4">
        <img
          className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <h3 className=" font-semibold mb-2">{designation}</h3>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default About;
