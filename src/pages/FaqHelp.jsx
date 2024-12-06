export const FAQAndHelp = () => {
  const faqs = [
    {
      question: "What is LUXURA?",
      answer:
        "LUXURA is an e-commerce platform dedicated to providing luxurious and premium products to enhance your lifestyle.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by logging into your account and visiting the 'My Orders' section.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, debit cards, PayPal, and other secure payment gateways.",
    },
    {
      question: "What is your return policy?",
      answer:
        "You can return any unused product within 30 days of purchase. Please visit our 'Returns and Refunds' section for more details.",
    },
  ];

  const helpTopics = [
    {
      title: "Shipping Information",
      description: "Learn about shipping options, delivery times, and costs.",
    },
    {
      title: "Account Management",
      description:
        "Get help with creating, managing, or recovering your account.",
    },
    {
      title: "Technical Support",
      description:
        "Facing issues on our website? Reach out to our technical team for assistance.",
    },
    {
      title: "Contact Support",
      description:
        "Need immediate assistance? Our support team is here 24/7 to help you.",
    },
  ];

  return (
    <div className="flex justify-center pb-10 pt-28 bg-gray-50 dark:bg-gray-900">
      <div className="w-4/5 2xl:w-3/5">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-slate-200">
            <span className="text-rose-600">FAQ</span> & Help
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-slate-200">
            Find answers to common questions or explore help topics to resolve
            your concerns.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-semibold text-gray-800 dark:text-slate-200">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Help Topics Section */}
        <div>
          <h2 className="mb-8 text-3xl font-semibold text-gray-800 dark:text-slate-200">
            Help Topics
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {helpTopics.map((topic, index) => (
              <div
                key={index}
                className="p-6 text-white rounded-lg bg-gradient-to-r from-rose-500 to-rose-600"
              >
                <h3 className="mb-2 text-xl font-semibold">{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
