import { useEffect } from "react";
import useTitle from "../../customHooks/useTitle";

const arr = [
  {
    section: "Eligibility",
    content: `
          You must be at least 18 years old and capable of forming a binding contract to use CoMeet. By using our platform, you represent and warrant that you meet this eligibility requirement.
        `,
  },
  {
    section: "Account Registration",
    content: `
          To access certain features of the platform, you may be required to create an account. You agree to provide accurate and complete information during registration and keep your account details up to date. You are responsible for maintaining the confidentiality of your account and password.
        `,
  },
  {
    section: "Booking and Payment",
    content: `
          When you book a meeting room through CoMeet, you agree to pay all applicable fees. Payments may be processed by third-party payment providers, and CoMeet is not responsible for their actions or omissions. Your booking is only confirmed once the payment is processed successfully.
        `,
  },
  {
    section: "Cancellation and Refund Policy",
    content: `
          You may cancel your booking according to the cancellation policies of the respective meeting room. Refunds are subject to the individual terms of the space provider. CoMeet is not responsible for handling or processing any refunds.
        `,
  },
  {
    section: "User Conduct",
    content: `
          You agree not to:
          - Use CoMeet for any unlawful purpose.
          - Post false, misleading, or inaccurate information.
          - Interfere with or disrupt the platform or servers.
          - Violate the rights of others or CoMeet’s policies.
          CoMeet reserves the right to terminate your account if you violate these terms.
        `,
  },
  {
    section: "Room Provider Responsibilities",
    content: `
          Room providers are responsible for maintaining their room availability, ensuring the accuracy of room descriptions, and fulfilling bookings. CoMeet is a platform and is not responsible for any disputes or issues arising between users and room providers.
        `,
  },
  {
    section: "Intellectual Property",
    content: `
          CoMeet and its content, including trademarks, logos, and other intellectual property, are owned by CoMeet or its licensors. You are granted a limited, non-exclusive, non-transferable license to access and use the platform for personal or business use related to meeting room bookings.
        `,
  },
  {
    section: "Limitation of Liability",
    content: `
          CoMeet is provided on an "as is" and "as available" basis. We do not guarantee that the platform will be error-free, secure, or uninterrupted. To the maximum extent permitted by law, CoMeet will not be liable for any indirect, incidental, or consequential damages arising out of your use of the platform.
        `,
  },
  {
    section: "Indemnification",
    content: `
          You agree to indemnify and hold harmless CoMeet and its affiliates, officers, directors, and employees from any claims, liabilities, damages, losses, or expenses, including legal fees, arising out of your use of the platform or violation of these terms.
        `,
  },
  {
    section: "Termination",
    content: `
          CoMeet may terminate or suspend your account and access to the platform at any time for any reason, including violations of these terms or inactivity. Upon termination, you remain responsible for any outstanding payments or obligations.
        `,
  },
  {
    section: "Governing Law",
    content: `
          These Terms of Service shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising from these terms or your use of the platform will be resolved in the courts of [Jurisdiction].
        `,
  },
  {
    section: "Changes to Terms",
    content: `
          CoMeet reserves the right to modify these Terms of Service at any time. If we make changes, we will provide notice by updating the terms on our website. Your continued use of the platform after any changes means you agree to the new terms.
        `,
  },
  {
    section: "Contact Information",
    content: `
          If you have any questions or concerns about these Terms of Service, please contact us at support@comeet.com.
        `,
  },
];

const TermsOfService = () => {
  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Terms Of Service");
  return (
    <div className="bg-zinc-50 w-full xl:px-16 lg:px-16 md:px-16 sm:px-16 px-16 py-16 font-sans">
      <h2 className="text-3xl font-semibold text-violet-600 text-center mb-10">
        Terms Of Service
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

export default TermsOfService;
