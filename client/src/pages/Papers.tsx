import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { samplePapers } from "@/data/mockData";
import { FileText, ChevronRight, BookOpen } from "lucide-react";

export default function Papers() {
  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Sample Papers</h1>
            <p className="text-muted-foreground text-lg">
              Select a sample exam paper to start your practice session. Each paper contains 40 questions covering all 6 units.
            </p>
          </div>

          <div className="grid gap-6">
            {samplePapers.map((paper) => (
              <Card key={paper.id} className="group hover:border-primary/50 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-lg bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-red-50 transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-xl">{paper.title}</CardTitle>
                    <CardDescription>40 Questions • 60 Minutes • Official v4.0.1 Syllabus</CardDescription>
                  </div>
                  <Link href={`/exam?paper=${paper.id}`}>
                    <Button className="hidden sm:flex">
                      Start Paper
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent className="sm:hidden pb-6 px-6">
                  <Link href={`/exam?paper=${paper.id}`}>
                    <Button className="w-full">
                      Start Paper
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center md:text-left flex-grow">
                <h3 className="text-xl font-bold mb-2">Study Tip</h3>
                <p className="text-muted-foreground">
                  The ISTQB Foundation Level exam pass mark is 65% (26 out of 40 questions). Try to aim for 80% in these practice papers to ensure success on exam day!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
