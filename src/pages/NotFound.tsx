
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-portfolio-navy mb-4">404</h1>
        <h2 className="text-2xl font-medium text-portfolio-slate mb-6">Page Not Found</h2>
        <p className="text-portfolio-slate mb-8">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-portfolio-green hover:bg-portfolio-green/90 text-portfolio-navy">
          <a href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
