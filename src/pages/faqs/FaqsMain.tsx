import { useEffect } from "react";
import useTitle from "../../customHooks/useTitle";

const faqs = [
  {
    ques: "What are the available payment methods?",
    ans: "We accept payments through all major credit cards, debit cards, and PayPal. More payment options will be available soon.",
  },
  {
    ques: "How can I book a meeting room?",
    ans: "Simply browse the available rooms, select a time slot, and confirm your booking. You'll receive a confirmation email with all the details.",
  },
  {
    ques: "Can I cancel or reschedule my booking?",
    ans: "Yes, you can cancel or reschedule your booking up to 24 hours before the scheduled time without any charges. Cancellations or changes made within 24 hours will incur a fee.",
  },
  {
    ques: "Are refreshments provided in the meeting rooms?",
    ans: "Some of our meeting rooms offer complimentary refreshments. You can check the room amenities when making your booking.",
  },
  {
    ques: "What is your refund policy?",
    ans: "Refunds are available for cancellations made 24 hours before the booking time. No refunds will be issued for late cancellations or no-shows.",
  },
  {
    ques: "Can I extend my meeting if it goes longer than expected?",
    ans: "You can extend your meeting if the room is available. Additional charges will apply for the extended time.",
  },
  {
    ques: "Do you offer any discounts for bulk bookings?",
    ans: "Yes, we offer special discounts for long-term and bulk bookings. Please contact our support team for more details.",
  },
  {
    ques: "How do I know if the room I want is available?",
    ans: "You can check real-time availability for all rooms directly on our platform. If a room is booked, it will be marked as unavailable for the selected time slot.",
  },
];

const FaqsMain = () => {
  //scrolltop
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTitle("Faqs");
  return (
    <div className="bg-zinc-50 w-full xl:px-16 lg:px-16 md:px-16 sm:px-16 px-16 py-16 font-sans">
      <h2 className="text-3xl font-semibold text-violet-600 text-center mb-10">
        FAQs
      </h2>

      {faqs.map((faq, i) => (
        <div key={i} className="my-3">
          <h4 className="text-[19px] text-gray-600 font-bold">{faq.ques}</h4>
          <p className="mt-1 mb-3 lg:text-[17px] text-base text-gray-600">
            {faq.ans}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FaqsMain;
