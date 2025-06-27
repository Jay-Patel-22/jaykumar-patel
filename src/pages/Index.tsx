
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
        'template_cl3ihf5',
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
      title: "🏗️ Infrastructure as Code Templates",
      description: "Developed modular Terraform templates with integrated security scanning, reducing infrastructure setup time by 60% for 20+ microservices.",
      tech: ["Terraform", "AWS", "Security Scanning", "Docker", "Kubernetes"],
      impact: "60% setup time reduction",
      icon: "🚀"
    },
    {
      title: "🤖 Intelligent Outlook Add-in with AI Integration",
      description: "Built a JavaScript-based Outlook add-in that leverages OpenAI and Zoho Creator APIs to automate workflow processes. This project showcased my ability to work across the full stack while maintaining DevOps best practices.",
      tech: ["JavaScript", "OpenAI API", "Zoho Creator", "REST APIs", "Outlook Add-in"],
      impact: "Full-stack automation",
      icon: "⚡"
    },
    {
      title: "🔄 MLOps Model Deployment Pipeline",
      description: "Designed and implemented an automated MLOps pipeline on AWS using SageMaker, ECR, and Step Functions. Achieved 40% reduction in manual model deployment time.",
      tech: ["AWS SageMaker", "ECR", "Step Functions", "Docker", "Python"],
      impact: "40% faster deployments",
      icon: "🎯"
    },
    {
      title: "☁️ Cloud-Native Microservices Platform",
      description: "Designed a complete cloud-native platform with automated scaling, monitoring, and self-healing capabilities. Achieved 99.95% uptime.",
      tech: ["Kubernetes", "Docker", "Prometheus", "Grafana", "Auto-scaling"],
      impact: "99.95% uptime",
      icon: "🛡️"
    }
  ];

  const experience = [
    {
      company: "Imex Cargo",
      role: "Software Engineer Intern",
      duration: "Sep 2024 – Jan 2025",
      achievements: [
        "🔧 Architected and developed a comprehensive Outlook add-in integrated with REST APIs, implementing real-time data synchronization protocols that improved data processing speed by 40% and enhanced user workflow efficiency",
        "🏗️ Designed and implemented Infrastructure as Code (IaC) solutions using Terraform, automating the provisioning and management of cloud resources across multiple environments, resulting in 10+ hours of weekly operational savings",
        "🤖 Engineered seamless integration between OpenAI's GPT models and Zoho Creator platform, developing intelligent automation workflows that streamlined business processes and reduced manual intervention by 60%",
        "🐳 Containerized multiple applications using Docker, created comprehensive deployment runbooks, and established CI/CD pipelines that reduced deployment time by 50% and improved system reliability"
      ]
    },
    {
      company: "Xoriant",
      role: "Software Engineer - DevOps",
      duration: "Mar 2021 – Aug 2023",
      achievements: [
        "☁️ Architected and deployed scalable, secure cloud environments using Terraform for 15+ enterprise projects, implementing Infrastructure as Code best practices that reduced provisioning time by 70% and improved consistency across environments",
        "⚙️ Orchestrated and maintained production-grade Kubernetes clusters supporting 100+ microservices, implementing auto-scaling, load balancing, and resource optimization strategies that achieved 99.9% uptime and reduced infrastructure costs by 30%",
        "🔒 Designed and implemented comprehensive CI/CD pipelines incorporating Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST), reducing security vulnerabilities by 80% and accelerating deployment cycles by 60%",
        "📊 Deployed and configured enterprise monitoring solutions including Prometheus for metrics collection, Grafana for visualization, and ELK Stack (Elasticsearch, Logstash, Kibana) for centralized logging, providing real-time insights into application performance and system health"
      ]
    },
    {
      company: "Ifuture Technologies",
      role: "Cloud Engineer Intern",
      duration: "Jun 2019 – Aug 2019",
      achievements: [
        "🔄 Developed and implemented robust CI/CD pipelines for hybrid cloud environments spanning AWS and Google Cloud Platform, enabling seamless application deployment across multiple cloud providers and reducing deployment time by 45%",
        "📚 Created comprehensive automation scripts for infrastructure provisioning, configuration management, and application deployment, along with detailed operational documentation that improved team productivity and reduced onboarding time for new engineers by 50%"
      ]
    }
  ];

  const navigation = [
    { id: 'about', icon: User, label: 'OVERVIEW' },
    { id: 'resume', icon: FileText, label: 'EXPERIENCE' },
    { id: 'portfolio', icon: Briefcase, label: 'PROJECTS' },
    { id: 'contact', icon: Mail, label: 'CONTACT' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Professional Overview</h2>
              <div className="h-1 w-16 bg-orange-500 mb-8"></div>
            </div>
            
            <div className="text-gray-300 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                💼 <strong className="text-white">Software Engineer specializing in DevOps & Cloud Infrastructure</strong> with a proven track record of transforming enterprise operations through automation and intelligent system design. 
                Currently pursuing my Master's in Informatics at Northeastern University while delivering real-world impact as a Software Engineer Intern.
              </p>
              
              <p>
                🚀 From my early days as a <span className="text-blue-400 font-semibold">Cloud Engineer Intern</span> to my current role as a <span className="text-teal-400 font-semibold">Software Engineer</span>, 
                I've consistently engineered solutions that <span className="text-orange-400 font-semibold">slash deployment times by 50%+</span> and 
                maintain rock-solid <span className="text-green-400 font-semibold">99.9% uptime</span> across production environments.
              </p>
              
              <p>
                🔧 My expertise spans the full DevOps lifecycle—from building AI-integrated Outlook add-ins to orchestrating <span className="text-blue-400 font-semibold">100+ microservices</span> on Kubernetes, 
                designing MLOps pipelines, and implementing Infrastructure as Code that saves organizations <span className="text-teal-400 font-semibold">10+ hours weekly</span>.
              </p>
              
              <p>
                🛡️ Security and reliability aren't afterthoughts—they're architected into every pipeline, every deployment, and every line of Terraform I write. 
                My approach combines cutting-edge technology with operational excellence to deliver solutions that scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800/50 p-3 md:p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium text-sm md:text-base">{skill.name}</span>
                    <Badge variant="outline" className="border-orange-500 text-orange-500 text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">{skill.level}%</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'resume':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Professional Experience</h2>
              <div className="h-1 w-16 bg-orange-500 mb-8"></div>
            </div>

            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="pb-4">
                  <CardTitle className="text-orange-400 flex items-center gap-2 text-lg md:text-xl">
                    <Award className="h-4 w-4 md:h-5 md:w-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 pt-0">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white text-sm md:text-base">Master of Professional Studies in Informatics</h4>
                    <p className="text-blue-300 text-sm md:text-base">Northeastern University, Boston, MA</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                        Expected June 2025
                      </span>
                      <Badge variant="outline" className="border-teal-400 text-teal-400 w-fit text-xs">
                        GPA: 3.9/4.0
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">Work Experience</h3>
                {experience.map((exp, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col gap-2">
                        <div>
                          <CardTitle className="text-orange-400 text-lg md:text-xl">{exp.role}</CardTitle>
                          <CardDescription className="text-teal-300 text-base md:text-lg">{exp.company}</CardDescription>
                        </div>
                        <Badge variant="outline" className="border-gray-600 text-gray-300 w-fit text-xs">
                          {exp.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-3 text-gray-300">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                            <span className="text-xs md:text-sm leading-relaxed">{achievement}</span>
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
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Featured Projects</h2>
              <div className="h-1 w-16 bg-orange-500 mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl md:text-2xl">{project.icon}</span>
                      <CardTitle className="text-orange-400 text-sm md:text-base leading-tight">{project.title}</CardTitle>
                    </div>
                    <Badge variant="outline" className="border-teal-400 text-teal-400 w-fit text-xs">
                      {project.impact}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 mb-4 text-xs md:text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
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
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
              <div className="h-1 w-16 bg-orange-500 mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-orange-400 flex-shrink-0" />
                    <a href="mailto:patel.jayku@northeastern.edu" className="hover:text-orange-400 transition-colors break-all">
                      patel.jayku@northeastern.edu
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-orange-400 flex-shrink-0" />
                    Boston, MA
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                    <Linkedin className="h-4 w-4 md:h-5 md:w-5 text-orange-400 flex-shrink-0" />
                    <a href="https://www.linkedin.com/in/jayp22/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="pb-4">
                  <CardTitle className="text-orange-400 text-lg md:text-xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300 text-sm">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-400 text-sm" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300 text-sm">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-400 text-sm" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-300 text-sm">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message..." 
                        rows={4} 
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-400 resize-none text-sm" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-600 to-red-500 hover:from-orange-700 hover:to-red-600 text-white transition-all duration-300 text-sm" 
                      disabled={isSubmitting}
                    >
                      <Mail className="mr-2 h-3 w-3 md:h-4 md:w-4" />
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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row">
      {/* Geometric Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/10 to-blue-500/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/30 to-red-500/30 transform rotate-45 -translate-x-48 -translate-y-48"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-teal-500/20 transform rotate-12"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-teal-500/20 to-blue-500/20 transform -rotate-12 translate-x-32 translate-y-32"></div>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-80 bg-gray-800/90 backdrop-blur-sm border-b lg:border-r lg:border-b-0 border-gray-700 flex flex-col relative z-10">
        {/* Profile Section */}
        <div className="p-4 md:p-8 text-center border-b border-gray-700">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-1">
            <img 
              src="https://i.postimg.cc/Hk3bygsS/Whats-App-Image-2025-05-17-at-16-00-19-08c6f4b9.jpg" 
              alt="Jaykumar Nagji Patel" 
              className="w-full h-full rounded-full object-cover object-top scale-125"
              style={{ objectPosition: '50% 30%' }}
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-white mb-2">Jaykumar Patel</h1>
          <p className="text-gray-400 mb-4 text-sm md:text-base">DevOps | SRE | Cloud Engineer</p>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://github.com/Jay-Patel-22" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-1 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors">
                <Github className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">🐙</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/jayp22/" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-1 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">💼</span>
              </div>
            </a>
          </div>

          <div className="space-y-4 text-left">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">EMAIL</p>
              <p className="text-xs md:text-sm text-gray-300 break-all">patel.jayku@northeastern.edu</p>
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex-1">
                <p className="text-xs text-gray-500 uppercase tracking-wide">CV</p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-orange-400 hover:text-orange-300 p-0 h-auto text-xs"
                  onClick={handleResumeDownload}
                >
                  Download <Download className="ml-1 h-2 w-2 md:h-3 md:w-3" />
                </Button>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 uppercase tracking-wide">STATUS</p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-300">Available</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">LOCATION</p>
              <p className="text-xs md:text-sm text-gray-300">Boston, MA</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 md:p-4">
          <div className="space-y-1 md:space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span className="font-medium text-xs md:text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative z-10 overflow-x-hidden">
        <div className="p-4 md:p-8 max-w-none lg:max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
