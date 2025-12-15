import React from 'react';
import { Avatar } from '../Avatar';
import { ResumeData } from '../../types';
import { PieChart, TrendingUp, Activity, Box, CheckCircle } from 'lucide-react';

const GridAnalyst: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <div className="min-h-screen bg-slate-100 font-sans p-4 md:p-8 pb-24">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Profile Card */}
        <div className="md:col-span-1 bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center">
          {data.avatarUrl ? (
            <Avatar
              url={data.avatarUrl}
              alt={data.name}
              className="w-32 h-32 rounded-full mb-4 border-4 border-cyan-50"
            />
          ) : (
            <div className="w-32 h-32 bg-cyan-100 rounded-full flex items-center justify-center mb-4 text-4xl text-cyan-600 font-bold">
              {data.name.slice(0, 2).toUpperCase()}
            </div>
          )}
          <h1 className="text-2xl font-bold text-slate-800">{data.name}</h1>
          <p className="text-cyan-600 font-medium mb-6">{data.title}</p>

          <div className="w-full text-left space-y-3 text-sm text-slate-500 border-t border-slate-100 pt-6">
            <div className="flex justify-between">
              <span>Location</span>
              <span className="font-medium text-slate-700 text-right">{data.contact.location.split(',')[0]}</span>
            </div>
            <div className="flex justify-between">
              <span>Experience</span>
              <span className="font-medium text-slate-700">10+ Years</span>
            </div>
          </div>

          <a href={data.contact.linkedinUrl} className="mt-6 w-full py-2 bg-slate-800 text-white rounded-lg text-sm font-semibold hover:bg-slate-700 transition">
            LinkedIn Profile
          </a>
        </div>

        {/* Summary Card */}
        <div className="md:col-span-3 bg-white rounded-2xl shadow-sm p-8 flex flex-col justify-center">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Activity size={20} className="text-cyan-500" /> Executive Summary
          </h2>
          <p dangerouslySetInnerHTML={{ __html: data.summary }} className="text-gray-700 leading-relaxed" />
        </div>

        {/* Metrics/Skills Area */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.topSkills.slice(0, 4).map((skill, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-cyan-400">
              <div className="text-slate-400 text-xs uppercase font-bold mb-1">Skill Set</div>
              <div className="text-slate-800 font-bold text-lg">{skill}</div>
            </div>
          ))}
        </div>

        {/* Main Experience Feed */}
        <div className="md:col-span-3 space-y-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <TrendingUp className="text-cyan-600" /> Experience Logs
          </h2>

          {data.experience.map((job, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition break-inside-avoid">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                  <div className="text-cyan-600 font-medium">{job.company}</div>
                </div>
                <div className="text-sm font-mono text-slate-400 bg-slate-50 h-fit px-3 py-1 rounded mt-2 md:mt-0">
                  {job.duration}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {job.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed bg-slate-50 p-3 rounded-lg">
                    <CheckCircle size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                    {ach}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Widgets */}
        <div className="md:col-span-1 space-y-6">
          {/* Education Widget */}
          <div className="bg-slate-800 text-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-cyan-400">
              <Box size={20} />
              <h3 className="font-bold">Education</h3>
            </div>
            {data.education.map((edu, i) => (
              <div key={i} className="break-inside-avoid">
                <div className="font-bold">{edu.institution}</div>
                <div className="text-slate-400 text-sm">{edu.period}</div>
              </div>
            ))}
          </div>

          {/* All Skills Cloud */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-slate-800">
              <PieChart size={20} className="text-purple-500" />
              <h3 className="font-bold">Competencies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.topSkills.map((skill, i) => (
                <span key={i} className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded">
                  {skill}
                </span>
              ))}
              {data.certifications.map((cert, i) => (
                <span key={`c - ${i} `} className="text-xs font-semibold px-2 py-1 bg-yellow-50 text-yellow-700 rounded border border-yellow-100">
                  Cert: {cert.split(':')[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GridAnalyst;