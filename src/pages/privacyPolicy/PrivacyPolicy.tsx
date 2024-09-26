import { useEffect } from "react";
import useTitle from "../../customHooks/useTitle";

const arr = [
  {
    section: "Information We Collect",
    content: `
          When you use CoMeet, we may collect the following information:
          - **Personal Information**: Your name, email address, phone number, and payment details when you book a room.
          - **Booking Data**: Information about the rooms you book, including time, date, and preferences.
          - **Usage Data**: Details about how you interact with the platform, including device information, IP address, and location data.
        `,
  },
  {
    section: "How We Use Your Information",
    content: `
          We use the information we collect for the following purposes:
          - To facilitate room bookings and manage payments.
          - To communicate with you about your bookings and provide customer support.
          - To improve our platform and user experience through analytics and feedback.
        `,
  },
  {
    section: "Data Sharing and Disclosure",
    content: `
          We may share your data in the following cases:
          - With third-party service providers to process payments or support the platform.
          - When required by law or to protect the rights and safety of CoMeet and its users.
          - If CoMeet is involved in a merger or acquisition, your data may be transferred as part of that transaction.
        `,
  },
  {
    section: "Data Retention",
    content: `
          We retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
        `,
  },
  {
    section: "Your Rights",
    content: `
          You have the following rights regarding your personal data:
          - **Access**: You can request a copy of your data.
          - **Correction**: You can ask us to correct any inaccurate information.
          - **Deletion**: You can request the deletion of your personal data.
          - **Opt-out**: You can opt out of receiving marketing communications.
        `,
  },
  {
    section: "Security of Your Data",
    content: `
          We implement reasonable measures to protect your personal data from unauthorized access, alteration, or destruction. However, no system is completely secure, and we cannot guarantee the absolute security of your information.
        `,
  },
  {
    section: "Changes to This Policy",
    content: `
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on our website.
        `,
  },
];

const PrivacyPolicy = () => {
  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Privacy Policy");
  return (
    <div className="bg-zinc-50 w-full xl:px-16 lg:px-16 md:px-16 sm:px-16 px-16 py-16 font-sans">
      <h2 className="text-3xl font-semibold text-violet-600 text-center mb-10">
        Privacy Policy
      </h2>

      {arr.map((ar, i) => (
        <div key={i} className="my-3">
          <h4 className="text-[19px] text-gray-600 font-bold">{ar.section}</h4>
          <p className="mt-1 mb-3 lg:text-[17px] text-base text-gray-600">
            {ar.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
