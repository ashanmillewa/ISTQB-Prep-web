import { Link } from "wouter";
import { GraduationCap } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-90 transition-opacity">
          <GraduationCap className="h-6 w-6" />
          <span>ISTQB Prep</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            What is ISTQB?
          </Link>
          <Link href="/papers" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Practice Exam
          </Link>
        </div>
      </div>
    </nav>
  );
}
