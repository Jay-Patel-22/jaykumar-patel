import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Cloud, Code, Server, GitBranch, Database, Monitor, Mail, MapPin, Calendar, Award, ExternalLink, Download, Linkedin } from "lucide-react";
const Index = () => {
  const skills = [{
    name: "Terraform",
    category: "IaC",
    level: 95
  }, {
    name: "AWS",
    category: "Cloud",
    level: 90
  }, {
    name: "Docker",
    category: "Container",
    level: 88
  }, {
    name: "Kubernetes",
    category: "Orchestration",
    level: 85
  }, {
    name: "Python",
    category: "Programming",
    level: 82
  }, {
    name: "GCP",
    category: "Cloud",
    level: 80
  }, {
    name: "Jenkins",
    category: "CI/CD",
    level: 85
  }, {
    name: "Prometheus",
    category: "Monitoring",
    level: 78
  }];
  const projects = [{
    title: "MLOps Model Deployment Pipeline",
    description: "Deployed a CI/CD-enabled MLOps pipeline on AWS using SageMaker, ECR, and Step Functions—reduced model deployment time by 40%.",
    tech: ["AWS SageMaker", "ECR", "Step Functions", "Docker", "Python"],
    impact: "40% faster deployments"
  }, {
    title: "Infrastructure as Code for DevOps Pipelines",
    description: "Developed modular, secure Terraform templates for 20+ services, reducing infrastructure setup time by 60%.",
    tech: ["Terraform", "AWS", "GitHub Actions", "Helm", "Kubernetes"],
    impact: "60% setup time reduction"
  }];
  const experience = [{
    company: "Imex Cargo",
    role: "Software Engineer Intern",
    duration: "Sep 2024 – Jan 2025",
    achievements: ["Built Outlook add-in with REST APIs, improved data sync speed by 40%", "Automated infrastructure with Terraform, saving 10+ hours/week", "Integrated OpenAI & Zoho Creator for workflow efficiency", "Dockerized deployments and authored deployment runbooks"]
  }, {
    company: "Xoriant",
    role: "Software Engineer - DevOps",
    duration: "Mar 2021 – Aug 2023",
    achievements: ["Created Terraform-based environments for 15+ projects", "Maintained Kubernetes clusters for 100+ microservices", "Built secure CI/CD pipelines with SAST/DAST", "Deployed Prometheus, Grafana, and ELK monitoring systems"]
  }, {
    company: "Ifuture Technologies",
    role: "Cloud Engineer Intern",
    duration: "Jun 2019 – Aug 2019",
    achievements: ["Developed CI/CD pipelines for hybrid cloud (AWS/GCP)", "Authored automation scripts and operational documentation"]
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-slate-900/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 p-1">
              <img src="https://i.postimg.cc/Hk3bygsS/Whats-App-Image-2025-05-17-at-16-00-19-08c6f4b9.jpg" alt="Jaykumar Nagji Patel" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent leading-tight lg:text-7xl my-0 mx-0 font-extrabold">
            Jaykumar Nagji Patel
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-300 mb-6 font-light">
            Cloud & DevOps Engineer
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building scalable, secure, and automated infrastructure in the cloud. 
            3+ years of hands-on experience across AWS, GCP, and automation tooling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105">
              <Code className="mr-2 h-5 w-5" />
              Explore My Work
            </Button>
            <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 text-lg transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 leading-relaxed">
                Results-driven Cloud & DevOps Engineer with 3+ years of experience designing secure, 
                scalable cloud-native systems across AWS and GCP. Skilled in Infrastructure as Code (Terraform), 
                containerization (Docker), and CI/CD automation. Proven ability to reduce deployment time by 50%, 
                enforce security best practices, and maintain 99.9% uptime through proactive monitoring and Linux system administration.
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-teal-400 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
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
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-blue-400">{exp.role}</CardTitle>
                      <CardDescription className="text-teal-300 text-lg">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-slate-600 text-slate-300 w-fit">
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-300">
                    {exp.achievements.map((achievement, achievementIndex) => <li key={achievementIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                    <Badge variant="outline" className="border-blue-400 text-blue-400 mb-4">
                      {skill.category}
                    </Badge>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-teal-400 h-2 rounded-full transition-all duration-1000 group-hover:scale-105" style={{
                    width: `${skill.level}%`
                  }}></div>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{skill.level}%</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="border-teal-400 text-teal-400 mt-2">
                        {project.impact}
                      </Badge>
                    </div>
                    <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="bg-slate-700 text-slate-300">
                        {tech}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-400">Contact Information</CardTitle>
                <CardDescription className="text-slate-300">
                  Ready to discuss DevOps opportunities and cloud infrastructure projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a href="mailto:patel.jayku@northeastern.edu" className="hover:text-blue-400 transition-colors">
                    patel.jayku@northeastern.edu
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="h-5 w-5 text-teal-400" />
                  Boston, MA
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <a href="https://www.linkedin.com/in/jayp22/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-teal-400">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-slate-300">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-300">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-slate-300">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={4} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 resize-none" />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white transition-all duration-300">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-700 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            © 2024 Jaykumar Nagji Patel. Built with modern web technologies.
          </p>
          <div className="flex justify-center gap-6">
            <Badge variant="outline" className="border-slate-600 text-slate-400">
              React
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-400">
              TypeScript
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-400">
              Tailwind CSS
            </Badge>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;