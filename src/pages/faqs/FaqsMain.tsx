const faqs = [
  {
    ques: "What are the payment methods available?",
    ans: "At the moment, we accept all credit and debit cards through Stripe.",
  },
  {
    ques: "I have placed an order, when will I be receiving my purchases?",
    ans: "We are committed to process all our orders within 2 working days!. Delivery usually will takes about 2 to 5 business days for Dhaka, 7 to 15 business days for outside Dhaka",
  },
  {
    ques: "How much is the shipping fee?",
    ans: "Shipping Within Dhaka: 50 BDT for 1st KG, 30 BDT for subsequent KG. Shipping To outside Dhaka: 100 BDT for 1st KG, 50 BDT for subsequent 0.5KG.",
  },
  {
    ques: "How do I know if a product is available? Can I pre-order products from you?",
    ans: "All our products that you can purchase in our website are AVAILABLE & READY STOCK. Unless it is specifically mentioned that it's a PRE-ORDER or GROUP BUY product.",
  },
  {
    ques: "I ordered the wrong item/colour, can I request for an exchange?",
    ans: "Our apologies as we do not accept refund or return unless the product arrived faulty. Please share a picture or video of the issue and we shall take it from there.",
  },
];

const FaqsMain = () => {
  return (
    <div className="bg-zinc-50 w-full xl:px-16 lg:px-16 md:px-16 sm:px-16 px-16 py-16">
      <h2 className="text-3xl font-semibold text-black text-center mb-10">
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
