import companiesData from "../data/companies.json";

const TopCompanies = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Top Companies Hiring Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals working at the world's leading companies
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {companiesData.map((company) => (
            <button
              key={company.id}
              className="group flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 mb-3 rounded-xl overflow-hidden bg-company-logo-bg group-hover:scale-110 transition-transform duration-300">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">
                {company.name}
              </span>
            </button>
          ))}
        </div>

        {/* View All Companies Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-medium transition-colors">
            View All Companies
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;