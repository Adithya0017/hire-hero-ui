import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Briefcase, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Briefcase className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-foreground">JobPortal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#jobs"
              className="text-primary font-medium hover:text-primary-hover transition-colors"
            >
              Find Jobs
            </a>
            <a
              href="#companies"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              For Companies
            </a>
          </nav>

          {/* Theme Toggle & Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Log in
            </Button>
            <Button variant="outline">Sign up</Button>
            <Button className="bg-primary hover:bg-primary-hover">Post a Job</Button>
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#jobs"
                className="text-primary font-medium hover:text-primary-hover transition-colors"
              >
                Find Jobs
              </a>
              <a
                href="#companies"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                For Companies
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" className="justify-start">
                  Log in
                </Button>
                <Button variant="outline" className="justify-start">
                  Sign up
                </Button>
                <Button className="justify-start">Post a Job</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;