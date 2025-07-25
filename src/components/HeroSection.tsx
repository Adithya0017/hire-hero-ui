import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Building } from "lucide-react";

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    jobTitle: "",
    location: "",
    company: "",
  });

  const suggestedKeywords = ["Designer", "Developer", "Tester", "Manager", "Analyst", "Writer"];

  const handleSearch = () => {
    console.log("Searching for:", searchData);
    // Implement search logic here
  };

  const handleKeywordClick = (keyword: string) => {
    setSearchData(prev => ({ ...prev, jobTitle: keyword }));
  };

  return (
    <section className="relative bg-hero-gradient py-20 lg:py-28">
      <div className="absolute inset-0 bg-background/5"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
              dream job
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Discover thousands of job opportunities from top companies around the world
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-2 sm:p-4 shadow-xl max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-2">
              {/* Job Title Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Job title / keyword"
                  value={searchData.jobTitle}
                  onChange={(e) =>
                    setSearchData(prev => ({ ...prev, jobTitle: e.target.value }))
                  }
                  className="pl-10 h-14 border-0 bg-muted/50 focus:bg-background transition-colors"
                />
              </div>

              {/* Location Input */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Location"
                  value={searchData.location}
                  onChange={(e) =>
                    setSearchData(prev => ({ ...prev, location: e.target.value }))
                  }
                  className="pl-10 h-14 border-0 bg-muted/50 focus:bg-background transition-colors"
                />
              </div>

              {/* Company Input */}
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Company"
                  value={searchData.company}
                  onChange={(e) =>
                    setSearchData(prev => ({ ...prev, company: e.target.value }))
                  }
                  className="pl-10 h-14 border-0 bg-muted/50 focus:bg-background transition-colors sm:pr-20"
                />
                {/* Search Button - Overlapped on larger screens */}
                <Button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 hidden sm:flex h-10 px-6"
                >
                  Search
                </Button>
              </div>

              {/* Mobile Search Button */}
              <Button onClick={handleSearch} className="sm:hidden h-14">
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Suggested Keywords */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-blue-100 font-medium">Popular searches:</span>
            {suggestedKeywords.map((keyword) => (
              <button
                key={keyword}
                onClick={() => handleKeywordClick(keyword)}
                className="px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/20"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;