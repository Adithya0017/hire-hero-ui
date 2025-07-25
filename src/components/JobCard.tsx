import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bookmark } from "lucide-react";

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    logo: string;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/20">
      {/* Bookmark Button */}
      <button className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors opacity-0 group-hover:opacity-100">
        <Bookmark className="h-5 w-5 text-muted-foreground hover:text-primary" />
      </button>

      {/* Company Logo & Info */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex-shrink-0">
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="w-12 h-12 rounded-lg object-cover bg-company-logo-bg"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          <p className="text-muted-foreground font-medium">{job.company}</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center text-muted-foreground mb-4">
        <MapPin className="h-4 w-4 mr-2" />
        <span className="text-sm">{job.location}</span>
      </div>

      {/* Job Type & Salary */}
      <div className="flex items-center justify-between mb-4">
        <Badge
          variant={job.type === "Full-Time" ? "default" : "secondary"}
          className={
            job.type === "Full-Time"
              ? "bg-job-type-badge text-white"
              : "bg-secondary text-secondary-foreground"
          }
        >
          {job.type}
        </Badge>
        <span className="text-salary-badge font-semibold">{job.salary}</span>
      </div>

      {/* Apply Button */}
      <Button className="w-full">Apply Now</Button>
    </div>
  );
};

export default JobCard;