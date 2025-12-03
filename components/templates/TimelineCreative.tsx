import React from 'react';
import { ResumeData } from '../../types';
import { Briefcase, GraduationCap, Award, User } from 'lucide-react';

const TimelineCreative: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-800 pb-20">

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-6 text-4xl">
            {data.name.charAt(0)}
          </div>
          <h1 className="text-5xl font-bold mb-4">{data.name}</h1>
          <p className="text-xl text-indigo-100">{data.title}</p>
          <div className="mt-8 flex justify-center gap-4 text-sm font-medium">
            <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">{data.contact.email}</span>
            <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">{data.contact.phone}</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-10">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-4 text-indigo-600">
            <User size={24} />
            <h2 className="text-xl font-bold">Profile</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg">{data.summary}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {data.experience.map((job, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-start md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} break-inside-avoid`}>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-md flex items-center justify-center z-10">
                    <Briefcase size={14} className="text-white" />
                  </div>

                  {/* Spacer for mobile */}
                  <div className="w-12 md:w-1/2 shrink-0"></div>

                  {/* Card */}
                  <div className="w-full md:w-1/2 pl-4 md:pl-0 md:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
                      <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase mb-1 block">{job.duration}</span>
                      <h3 className="text-xl font-bold text-slate-800">{job.role}</h3>
                      <div className="text-slate-500 font-medium mb-4">{job.company}</div>
                      <ul className="space-y-2">
                        {job.achievements.slice(0, 3).map((ach, i) => (
                          <li key={i} className="text-sm text-slate-600 leading-relaxed">• {ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills & Certs Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-6 text-purple-600">
              <Award size={24} />
              <h2 className="text-xl font-bold">Core Competencies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.topSkills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-semibold">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-6 text-indigo-600">
              <GraduationCap size={24} />
              <h2 className="text-xl font-bold">Education & Certs</h2>
            </div>
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <div key={i} className="break-inside-avoid">
                  <h4 className="font-bold">{edu.institution}</h4>
                  <p className="text-sm text-slate-500">{edu.period}</p>
                </div>
              ))}
              <div className="h-px bg-slate-100 my-2"></div>
              {data.certifications.map((cert, i) => (
                <div key={i} className="text-sm text-slate-700 font-medium">{cert}</div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TimelineCreative;