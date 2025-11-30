import React from 'react';
import { ResumeData } from '../../types';
import { Terminal, Cpu, Database, ChevronRight, Hash } from 'lucide-react';

const TechDark: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300 font-mono selection:bg-green-900 selection:text-green-100 pb-24">
      {/* Top Bar */}
      <div className="w-full h-2 bg-gradient-to-r from-green-500 to-emerald-700"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-green-500 mb-2">
              <Terminal size={20} />
              <span className="text-sm">~/scrum-master/portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
              {data.name}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              <span className="text-green-500">&gt;</span> {data.title}
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 text-right space-y-1 text-sm text-gray-500">
            <p>{data.contact.email}</p>
            <p>{data.contact.linkedin}</p>
            <p>{data.contact.location}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-16">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Hash className="text-green-500" /> README.md
              </h2>
              <div className="bg-[#161b22] p-6 rounded-md border border-gray-800 text-gray-400 leading-relaxed">
                {data.summary}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Hash className="text-green-500" /> git log --oneline
              </h2>
              <div className="space-y-8">
                {data.experience.map((job, idx) => (
                  <div key={idx} className="group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                       <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                         {job.role} <span className="text-gray-500">@</span> {job.company}
                       </h3>
                       <span className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400 border border-gray-700 font-mono mt-1 md:mt-0 w-fit">
                         {job.duration}
                       </span>
                    </div>
                    <ul className="space-y-2 mt-4 pl-4 border-l border-gray-800">
                      {job.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <ChevronRight size={14} className="text-gray-600 mt-1 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-12">
            
            <section>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Cpu className="text-green-500" /> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.topSkills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-[#1f2937] text-green-400 text-xs border border-green-900/30 rounded hover:border-green-500/50 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Database className="text-green-500" /> Certifications
              </h2>
              <div className="space-y-3">
                 {data.certifications.map((cert, i) => (
                   <div key={i} className="p-3 bg-[#161b22] rounded border border-gray-800 text-sm hover:border-gray-700 transition-colors">
                     {cert}
                   </div>
                 ))}
              </div>
            </section>

             <section>
              <h2 className="text-xl font-bold text-white mb-6">Education</h2>
              {data.education.map((edu, i) => (
                <div key={i} className="text-sm">
                  <div className="font-bold text-white">{edu.institution}</div>
                  <div className="text-gray-500">{edu.period}</div>
                </div>
              ))}
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TechDark;