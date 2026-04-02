export function WhyChooseUs() {
  const benefits = [
    {
      title: "Proven Litigation Track Record",
      description: "Focused, specialized experience in banking, DRT, SARFAESI, civil and criminal matters",
      icon: "⭐",
    },
    {
      title: "Dedicated Team",
      description: "Expert attorneys focused on your specific legal needs",
      icon: "👥",
    },
    {
      title: "Personalized Approach",
      description: "Custom solutions tailored to your unique circumstances",
      icon: "🎯",
    },
    {
      title: "Clear Communication",
      description: "We explain complex legal matters in plain language",
      icon: "💬",
    },
    {
      title: "Transparent Fees",
      description: "No hidden charges – upfront, honest pricing",
      icon: "💰",
    },
    {
      title: "Results Focused",
      description: "Committed to achieving the best outcomes for you",
      icon: "✅",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Us</h2>
          <p className="text-xl text-gray-600">
            Expert legal representation with personal attention
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
