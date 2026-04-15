import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, BookOpen, BarChart3, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-red-500/10 text-red-500 hover:bg-red-500/20 mb-6">
                Updated for 2026 Syllabus
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                Master the <span className="text-primary">ISTQB Foundation</span> Level Exam
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Professional-grade practice exams designed to simulate the real testing environment. 
                Detailed explanations, performance tracking, and topic-focused analysis.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 justify-center lg:justify-start">
                <Link href="/papers">
                  <Button size="lg" className="w-full text-base px-8 h-12 shadow-lg shadow-primary/20">
                    Browse Sample Papers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/exam?paper=paper-a">
                  <Button variant="outline" size="lg" className="w-full text-base px-8 h-12">
                    Quick Start (Paper A)
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-lg lg:max-w-xl">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-blue-400 opacity-20 blur-xl"></div>
                <img 
                  src={heroBg} 
                  alt="ISTQB Study" 
                  className="relative rounded-2xl shadow-2xl border border-border/50 aspect-video object-cover"
                />
                
                {/* Floating Stats Card */}
                <Card className="absolute -bottom-6 -left-6 w-48 shadow-xl border-border/60 animate-in fade-in slide-in-from-bottom-4 duration-1000 hidden md:block">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pass Rate</p>
                      <p className="text-xl font-bold">65%</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full bg-grid-slate-50/[0.05] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/30 py-24 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Practice With Us?</h2>
            <p className="text-muted-foreground text-lg">
              Our platform provides more than just questions—we provide a complete learning ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BookOpen className="w-6 h-6 text-blue-600" />}
              title="Real Exam Simulation"
              description="Timed tests with the exact same structure and difficulty as the official ISTQB exam."
            />
            <FeatureCard 
              icon={<CheckCircle2 className="w-6 h-6 text-green-600" />}
              title="Detailed Explanations"
              description="Learn from your mistakes with comprehensive reasoning for every correct and incorrect answer."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-6 h-6 text-purple-600" />}
              title="Performance Analytics"
              description="Track your progress by topic area to identify weak points and focus your study time."
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© 2026 ISTQB Preparation.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-4 shadow-sm">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
