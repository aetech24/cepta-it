import { useState } from 'react';


const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment gateway."
    },
    {
      question: "What is your return policy?", 
      answer: "We offer a 30-day return policy for all unused items in their original packaging. Shipping costs for returns are the responsibility of the customer."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within Ghana. International shipping times vary by location, usually 7-14 business days."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <button
            className="w-full p-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-medium">{item.question}</span>
            <div className='flex items-center justify-center  bg-[#EF0303] hover:bg-[#00278C] w-[40px] h-[40px]'>
              <span className={`transform transition-transform duration-200 text-[35px] text-white ${activeIndex === index ? 'hidden' : 'block'}`}>
                +
              </span>
              <span className={`transform transition-transform duration-200 text-[35px] text-white ${activeIndex === index ? 'block text-white' : 'hidden'}`}>
                -
              </span>
            </div>
          </button>
          <div className={`transition-all duration-200 ${activeIndex === index ? 'max-h-40' : 'max-h-0'} overflow-hidden`}>
            <p className="p-4 bg-gray-50">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;