
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { User, FileText, Briefcase, Mail, Github, Linkedin, Download, MapPin, Award, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('about');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form data:', formData);
    console.log('Attempting to send email...');

    try {
      const result = await emailjs.send(
        'service_cgr72bl',
        'template_2so8y2r',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Jaykumar Nagji Patel'
        },
        'ConQIc9sfLsT0_2oV'
      );

      console.log('EmailJS result:', result);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://i.postimg.cc/gk3xCZV7/Patel-Jaykumar-Resume.png';
    link.download = 'Jaykumar_Nagji_Patel_Resume.png';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: "Terraform", category: "IaC", level: 95 },
    { name: "AWS", category: "Cloud", level: 90 },
    { name: "Docker", category: "Container", level: 88 },
    { name: "Kubernetes", category: "Orchestration", level: 85 },
    { name: "Python", category: "Programming", level: 82 },
    { name: "GCP", category: "Cloud", level: 80 },
    { name: "Jenkins", category: "CI/CD", level: 85 },
    { name: "Prometheus", category: "Monitoring", level: 78 }
  ];

  const projects = [
    {
      title: "MLOps Model Deployment Pipeline",
      description: "Deployed a CI/CD-enabled MLOps pipeline on AWS using SageMaker, ECR, and Step Functions—reduced model deployment time by 40%.",
      tech: ["AWS SageMaker", "ECR", "Step Functions", "Docker", "Python"],
      impact: "40% faster deployments"
    },
    {
      title: "Infrastructure as Code for DevOps Pipelines",
      description: "Developed modular, secure Terraform templates for 20+ services, reducing infrastructure setup time by 60%.",
      tech: ["Terraform", "AWS", "GitHub Actions", "Helm", "Kubernetes"],
      impact: "60% setup time reduction"
    }
  ];

  const experience = [
    {
      company: "Imex Cargo",
      role: "Software Engineer Intern",
      duration: "Sep 2024 – Jan 2025",
      achievements: [
        "Built Outlook add-in with REST APIs, improved data sync speed by 40%",
        "Automated infrastructure with Terraform, saving 10+ hours/week",
        "Integrated OpenAI & Zoho Creator for workflow efficiency",
        "Dockerized deployments and authored deployment runbooks"
      ]
    },
    {
      company: "Xoriant",
      role: "Software Engineer - DevOps",
      duration: "Mar 2021 – Aug 2023",
      achievements: [
        "Created Terraform-based environments for 15+ projects",
        "Maintained Kubernetes clusters for 100+ microservices",
        "Built secure CI/CD pipelines with SAST/DAST",
        "Deployed Prometheus, Grafana, and ELK monitoring systems"
      ]
    },
    {
      company: "Ifuture Technologies",
      role: "Cloud Engineer Intern",
      duration: "Jun 2019 – Aug 2019",
      achievements: [
        "Developed CI/CD pipelines for hybrid cloud (AWS/GCP)",
        "Authored automation scripts and operational documentation"
      ]
    }
  ];

  const navigation = [
    { id: 'about', icon: User, label: 'ABOUT' },
    { id: 'resume', icon: FileText, label: 'RESUME' },
    { id: 'portfolio', icon: Briefcase, label: 'PORTFOLIO' },
    { id: 'contact', icon: Mail, label: 'CONTACT' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <div className="h-1 w-16 bg-orange-500 mb-8"></div>
            </div>
            
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                🚀 <strong className="text-white">Cloud Infrastructure Architect</strong> with 3+ years transforming how organizations deploy and scale in the cloud. 
                I don't just manage infrastructure—I engineer solutions that <span className="text-blue-400 font-semibold">slash deployment times by 50%</span> and 
                maintain rock-solid <span className="text-teal-400 font-semibold">99.9% uptime</span>.
              </p>
              
              <p>
                💡 My superpower? Turning complex cloud challenges into elegant, automated solutions using Terraform, Docker, and Kubernetes. 
                From orchestrating <span className="text-blue-400 font-semibold">100+ microservices</span> to building MLOps pipelines that save hours of manual work, 
                I bridge the gap between development velocity and operational excellence.
              </p>
              
              <p>
                🔒 Security isn't an afterthought—it's built into every pipeline, every deployment, and every line of Infrastructure as Code I write.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <Badge variant="outline" className="border-orange-500 text-orange-500">
                      {skill.category}
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{skill.level}%</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'resume':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Resume</h2>
              <div className="h-1 w-16 bg-orange-500 mb-8"></div>
            </div>

            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-orange-400 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Master of Professional Studies in Informatics</h4>
                    <p className="text-blue-300">Northeastern University, Boston, MA</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Expected June 2025
                      </span>
                      <Badge variant="outline" className="border-teal-400 text-teal-400">
                        GPA: 3.9/4.0
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Experience</h3>
                {experience.map((exp, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <CardTitle className="text-orange-400">{exp.role}</CardTitle>
                          <CardDescription className="text-teal-300 text-lg">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="border-gray-600 text-gray-300 w-fit">
                          {exp.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-gray-300">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'portfolio':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Portfolio</h2>
              <div className="h-1 w-16 bg-orange-500 mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-orange-400">{project.title}</CardTitle>
                    <Badge variant="outline" className="border-teal-400 text-teal-400 w-fit">
                      {project.impact}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Contact</h2>
              <div className="h-1 w-16 bg-orange-500 mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="h-5 w-5 text-orange-400" />
                    <a href="mailto:patel.jayku@northeastern.edu" className="hover:text-orange-400 transition-colors">
                      patel.jayku@northeastern.edu
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-orange-400" />
                    Boston, MA
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Linkedin className="h-5 w-5 text-orange-400" />
                    <a href="https://www.linkedin.com/in/jayp22/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-orange-400">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-400" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-400" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-300">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message..." 
                        rows={4} 
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-400 resize-none" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white transition-all duration-300" 
                      disabled={isSubmitting}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Geometric Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-blue-500/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/30 to-red-500/30 transform rotate-45 -translate-x-48 -translate-y-48"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-teal-500/20 transform rotate-12"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-teal-500/20 to-blue-500/20 transform -rotate-12 translate-x-32 translate-y-32"></div>
      </div>

      {/* Sidebar */}
      <div className="w-80 bg-gray-800/90 backdrop-blur-sm border-r border-gray-700 flex flex-col relative z-10">
        {/* Profile Section */}
        <div className="p-8 text-center border-b border-gray-700">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-1">
            <img 
              src="https://i.postimg.cc/Hk3bygsS/Whats-App-Image-2025-05-17-at-16-00-19-08c6f4b9.jpg" 
              alt="Jaykumar Nagji Patel" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Jaykumar Patel</h1>
          <p className="text-gray-400 mb-4">DevOps | SRE | Cloud Engineer</p>
          
          <div className="flex justify-center space-x-4 mb-6">
            <Github className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
          </div>

          <div className="space-y-4 text-left">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">EMAIL</p>
              <p className="text-sm text-gray-300">patel.jayku@northeastern.edu</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">CV</p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-orange-400 hover:text-orange-300 p-0 h-auto"
                  onClick={handleResumeDownload}
                >
                  Download <Download className="ml-1 h-3 w-3" />
                </Button>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">STATUS</p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-300">Available</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">LOCATION</p>
              <p className="text-sm text-gray-300">Boston, MA</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative z-10">
        <div className="p-8 max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
