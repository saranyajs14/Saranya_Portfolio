import { useScrollAnimation, useStaggeredAnimation } from "@/components/scroll-animations"

export default function SkillsSection() {
  const skills = {
    programmingLanguages: ["Java", "C++", "Python", "C#", "SQL", "NodeJs"],
    frameworksTools: ["Spring", "Spring Boot", "JUnit", "REST API", "JMeter", "Maven"],
    database: ["DBMS", "Mysql", "MongoDB", "Redis"],
    CloudDevOps: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "Ansible", "GitHub Actions", "SonarQube"],
    monitoring: ["Grafana", "Splunk", "New Relic", "Sumo Logic"],
    architecture: ["Microservices", "Event-Driven Architecture (Kafka)", "Distributed Systems", "Object Oriented Programming"],
    projectManagement: ["Agile", "Jira", "Kanban", "Confluence"]
  };

  const categoryIcons = {
    programmingLanguages: "💻",
    frameworksTools: "🛠️",
    database: "🗄️",
    CloudDevOps: "☁️",
    monitoring: "📈",
    architecture: "🏛️",
    projectManagement: "📊"
  };

  const categoryLabels = {
    programmingLanguages: "Programming Languages",
    frameworksTools: "Frameworks & Tools",
    database: "Database",
    CloudDevOps: "Cloud & DevOps",
    monitoring: "Monitoring",
    architecture: "Architecture",
    projectManagement: "Project Management"
  };

  const titleRef = useScrollAnimation();

  // Generate staggered refs to match categories count
  const categoryKeys = Object.keys(skills);
  const categoryRefs = categoryKeys.map((_, i) => useStaggeredAnimation(i * 200));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-600 via-slate-500 to-slate-400 py-16 flex items-center relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-5 w-20 h-20 border border-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-5 w-16 h-16 border border-blue-800/15 rounded-full animate-bounce-very-slow"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 border-2 border-white/10 rotate-45 animate-spin-very-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white/10 rounded-full animate-ping-slow particle"></div>
        {/* Floating particles */}
        <div className="absolute top-1/4 left-20 w-2 h-2 bg-white/30 rounded-full animate-float particle"></div>
        <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-blue-800/25 rounded-full animate-float-delayed particle"></div>
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-slate-400/20 rounded-full animate-bounce-gentle particle"></div>
        {/* Code symbols */}
        <div className="absolute top-1/4 right-10 text-white/10 text-4xl font-mono animate-pulse-slow">&lt;/&gt;</div>
        <div className="absolute bottom-1/4 left-10 text-blue-800/10 text-3xl font-mono animate-bounce-slow">{`{}`}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl font-bold mb-16 text-center gradient-text relative scroll-animate opacity-0 translate-y-8"
        >
          Skills
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-white to-transparent rounded-full animate-expand-width"></div>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-800 rounded-full animate-ping"></div>
        </h1>

        <div className="space-y-16">
          {categoryKeys.map((category, i) => (
            <div
              key={category}
              ref={categoryRefs[i]}
              className="scroll-animate opacity-0 translate-y-8"
            >
              <h2 className="text-3xl font-bold mb-8 gradient-text flex items-center gap-3">
                <span>{categoryIcons[category]}</span>
                {categoryLabels[category]}
              </h2>
              <div className="flex flex-wrap gap-4">
                {skills[category].map((skill, index) => (
                  <div
                    key={index}
                    className="glass-card text-slate-200 px-6 py-3 rounded-full font-medium shadow-lg border border-slate-600/30 hover:shadow-2xl transition-all duration-500 hover:scale-110 group relative overflow-hidden cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{skill}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-blue-800/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
