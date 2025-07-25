import JobCard from "./JobCard";
import jobsData from "../data/jobs.json";

const FeaturedJobs = () => {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Jobs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the best job opportunities from top companies across different industries
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {jobsData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* View All Jobs Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-medium transition-colors">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;