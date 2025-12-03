import React from 'react';
import { ResumeData } from '../../types';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const ModernClean: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">

        {/* Header */}
        <header className="px-8 py-10 bg-white border-b border-gray-100 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-2">{data.name}</h1>
          <p className="text-xl text-blue-600 font-medium mb-6">{data.title}</p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><MapPin size={14} /> {data.contact.location}</span>
            <span className="flex items-center gap-1"><Phone size={14} /> {data.contact.phone}</span>
            <a href={`mailto:${data.contact.email}`} className="flex items-center gap-1 hover:text-blue-600"><Mail size={14} /> {data.contact.email}</a>
            <a href={data.contact.linkedinUrl} className="flex items-center gap-1 hover:text-blue-600"><Linkedin size={14} /> LinkedIn</a>
          </div>
        </header>

        <div className="p-8 sm:p-12 space-y-12">

          {/* Summary */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              {data.summary}
            </p>
          </section>

          {/* Skills Grid */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {data.topSkills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Professional History</h2>
            <div className="space-y-10 border-l-2 border-gray-100 pl-8 ml-2">
              {data.experience.map((job, index) => (
                <div key={index} className="relative break-inside-avoid">
                  <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-blue-500"></span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                    <span className="text-sm font-mono text-gray-400">{job.duration}</span>
                  </div>
                  <div className="text-blue-600 font-medium mb-3">{job.company}</div>
                  <div className="space-y-2 text-gray-600">
                    {job.achievements.map((ach, i) => (
                      <p key={i} className="leading-relaxed text-sm">• {ach}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Education</h2>
              {data.education.map((edu, i) => (
                <div key={i} className="break-inside-avoid">
                  <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              ))}
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Certifications</h2>
              <ul className="space-y-2">
                {data.certifications.map((cert, i) => (
                  <li key={i} className="text-sm text-gray-700 border-b border-gray-100 pb-2 last:border-0">{cert}</li>
                ))}
              </ul>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModernClean;