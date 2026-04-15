import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Globe, 
  Users,
  Target,
  Zap,
  TrendingUp,
  Clock,
  FileText,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutISTQB() {
  const benefits = [
    {
      title: "Career Opportunities",
      description: "Many companies prefer or require ISTQB-certified testers when hiring QA engineers or software testers.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />
    },
    {
      title: "Industry Recognition",
      description: "ISTQB is internationally recognized, which means your certification is valuable worldwide.",
      icon: <Globe className="w-6 h-6 text-primary" />
    },
    {
      title: "Better Testing Knowledge",
      description: "The certification helps you understand testing concepts, techniques, and best practices used in the industry.",
      icon: <BookOpen className="w-6 h-6 text-primary" />
    },
    {
      title: "Professional Growth",
      description: "It improves your credibility and can help you advance to senior testing roles such as Test Analyst or Test Manager.",
      icon: <Award className="w-6 h-6 text-primary" />
    },
    {
      title: "Standardized Terminology",
      description: "ISTQB introduces a common testing vocabulary used by teams around the world.",
      icon: <Users className="w-6 h-6 text-primary" />
    }
  ];

  const certificationFocus = [
    "Software testing principles",
    "Testing techniques",
    "Test management",
    "Test design",
    "Quality assurance practices"
  ];

  return (
    <div className="min-h-screen bg-secondary/30 pb-20">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                What is ISTQB?
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed font-light">
                International Software Testing Qualifications Board
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Overview Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-none shadow-xl mb-12 overflow-hidden">
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-1">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4" />
                        Global Standard
                      </div>
                      <h2 className="text-3xl font-serif font-bold text-foreground">A Globally Recognized Organization</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        ISTQB is a globally recognized organization that provides standardized certifications for software testing professionals. The main goal is to improve the quality of software testing worldwide by defining common terminology, best practices, and testing knowledge frameworks.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        ISTQB certifications are accepted internationally and are widely used by companies to evaluate the knowledge and skills of software testers.
                      </p>
                    </div>
                    <div className="bg-secondary/50 rounded-2xl p-8 border border-border/40">
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Validation of Skills
                      </h3>
                      <ul className="space-y-4">
                        {certificationFocus.map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Certification Levels */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Certification Levels</h2>
              <p className="text-muted-foreground">Tailored for every stage of your testing career</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  name: "Foundation Level (CTFL)", 
                  tag: "Entry-level", 
                  desc: "The most popular starting point for beginners in software testing.",
                  color: "bg-blue-500" 
                },
                { 
                  name: "Advanced Level (CTAL)", 
                  tag: "Experienced", 
                  desc: "For experienced testers who want deeper knowledge.",
                  color: "bg-indigo-600" 
                },
                { 
                  name: "Expert Level (CTEL)", 
                  tag: "Extensive Exp", 
                  desc: "For professionals with extensive testing experience.",
                  color: "bg-purple-700" 
                }
              ].map((level, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-none shadow-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className={`w-12 h-1 rounded-full ${level.color} mb-6`}></div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">{level.tag}</div>
                      <h3 className="text-xl font-bold mb-4 leading-tight">{level.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{level.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-serif font-bold">Key Benefits</h2>
              <div className="h-px bg-border flex-grow ml-8 hidden md:block"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <Card key={i} className="border-border/40 hover:border-primary/50 transition-colors group">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-primary/5 group-hover:bg-primary/10 transition-colors w-12 h-12 rounded-xl flex items-center justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Exam Format */}
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-border/40 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-serif font-bold mb-8">Exam Format</h2>
                  <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                    The ISTQB Foundation Level exam follows a standardized format worldwide, ensuring consistency and fairness for all candidates.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">40 Questions</h4>
                        <p className="text-sm text-muted-foreground">Multiple-choice format</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">60 Minutes</h4>
                        <p className="text-sm text-muted-foreground">Extra time for non-native speakers</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">65% Passing Score</h4>
                        <p className="text-sm text-muted-foreground">26 out of 40 correct</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Question Types</h4>
                        <p className="text-sm text-muted-foreground">Single correct, Scenario, Concept</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary p-8 rounded-2xl text-primary-foreground">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6" />
                    Ready to Start?
                  </h3>
                  <p className="text-primary-foreground/70 text-sm mb-8 leading-relaxed">
                    Put your knowledge to the test with our simulated exam environment.
                  </p>
                  <a 
                    href="/papers" 
                    className="block w-full py-3 px-6 bg-white text-primary text-center font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-lg"
                  >
                    Take Practice Exam
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
