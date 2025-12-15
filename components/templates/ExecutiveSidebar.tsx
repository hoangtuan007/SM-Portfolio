import React from 'react';
import { ResumeData } from '../../types';
import { Phone, Mail, MapPin, Linkedin, Award, Globe } from 'lucide-react';
import { Avatar } from '../Avatar';

const ExecutiveSidebar: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col md:flex-row shadow-xl max-w-7xl mx-auto my-0 md:my-10">
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 bg-[#2C3E50] text-white p-8 md:p-12">
        <div className="mb-10">
          <h2 className="text-xl font-bold uppercase tracking-widest border-b border-gray-500 pb-2 mb-6 text-gray-300">Contact</h2>
          <div className="space-y-4 text-sm font-light">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-blue-300 shrink-0" />
              <span>{data.contact.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-blue-300 shrink-0" />
              <span>{data.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-blue-300 shrink-0" />
              <a href={`mailto:${data.contact.email}`} className="hover:text-blue-300 transition">{data.contact.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin size={16} className="text-blue-300 shrink-0" />
              <a href={data.contact.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-blue-300 transition break-words">{data.contact.linkedin}</a>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold uppercase tracking-widest border-b border-gray-500 pb-2 mb-6 text-gray-300">Top Skills</h2>
          <ul className="space-y-2 text-sm">
            {data.topSkills.map((skill, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold uppercase tracking-widest border-b border-gray-500 pb-2 mb-6 text-gray-300">Certifications</h2>
          <ul className="space-y-4 text-sm">
            {data.certifications.map((cert, index) => (
              <li key={index} className="flex items-start gap-3">
                <Award size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold uppercase tracking-widest border-b border-gray-500 pb-2 mb-6 text-gray-300">Languages</h2>
          <ul className="space-y-2 text-sm">
            {data.languages.map((lang, index) => (
              <li key={index} className="flex items-center gap-2">
                <Globe size={14} className="text-blue-300" />
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-2/3 p-8 md:p-16 bg-white">
        <header className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8 border-b-2 border-[#2C3E50] pb-8">
          {data.avatarUrl && (
            <div className="shrink-0">
              <Avatar
                url={data.avatarUrl}
                alt={data.name}
                className="w-40 h-40 rounded-full shadow-lg border-4 border-white"
              />
            </div>
          )}
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold text-[#2C3E50] mb-2">{data.name}</h1>
            <h2 className="text-xl text-gray-500 font-medium">{data.title}</h2>
          </div>
        </header>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-[#2C3E50] uppercase mb-4 border-b-2 border-[#2C3E50] pb-2 inline-block">Summary</h3>
          <p
            className="text-gray-600 leading-relaxed text-justify"
            dangerouslySetInnerHTML={{ __html: data.summary }}
          />
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold text-[#2C3E50] uppercase mb-8 border-b-2 border-[#2C3E50] pb-2 inline-block">Experience</h3>
          <div className="space-y-10">
            {data.experience.map((job, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{job.role}</h4>
                    <p className="text-lg text-[#2C3E50] font-medium">{job.company}</p>
                  </div>
                  <div className="text-sm text-gray-500 font-medium mt-1 sm:mt-0 italic">
                    {job.duration}
                  </div>
                </div>
                <div className="text-sm text-gray-400 mb-3">{job.location}</div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 leading-relaxed">
                  {job.achievements.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-[#2C3E50] uppercase mb-4 border-b-2 border-[#2C3E50] pb-2 inline-block">Education</h3>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <h4 className="text-lg font-bold text-gray-800">{edu.institution}</h4>
              <p className="text-gray-500">{edu.period}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ExecutiveSidebar;