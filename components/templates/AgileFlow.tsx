import React from 'react';
import { ResumeData } from '../../types';
import {
    Kanban,
    Target,
    GitBranch,
    RefreshCcw,
    Zap,
    Mail,
    Linkedin,
    MapPin,
    Award,
    BookOpen
} from 'lucide-react';

const AgileFlow: React.FC<{ data: ResumeData }> = ({ data }) => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">

            {/* Top Navigation / Header */}
            <header className="bg-[#0f4c5c] text-white py-12 px-4 shadow-lg">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-2 text-teal-300">
                            <Kanban size={24} />
                            <span className="font-mono text-sm tracking-widest uppercase">Scrum Master Portfolio</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{data.name}</h1>
                        <p className="text-xl text-teal-100 font-medium">{data.title}</p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-teal-100">
                        <div className="flex items-center gap-2 bg-[#165f70] px-4 py-2 rounded-lg">
                            <Mail size={16} className="text-teal-300" />
                            <span>{data.contact.email}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#165f70] px-4 py-2 rounded-lg">
                            <Linkedin size={16} className="text-teal-300" />
                            <span>{data.contact.linkedin}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#165f70] px-4 py-2 rounded-lg">
                            <MapPin size={16} className="text-teal-300" />
                            <span>{data.contact.location}</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: The "Backlog" (Skills, Education, Certs) */}
                <aside className="lg:col-span-4 space-y-8">

                    {/* Summary Card */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#0f4c5c]">
                        <h2 className="text-lg font-bold text-[#0f4c5c] mb-4 flex items-center gap-2">
                            <Target size={20} /> Sprint Goal (Summary)
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">
                            {data.summary}
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-teal-600">
                        <h2 className="text-lg font-bold text-[#0f4c5c] mb-4 flex items-center gap-2">
                            <Zap size={20} /> Core Competencies
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {data.topSkills.map((skill, i) => (
                                <span key={i} className="px-3 py-1 bg-teal-50 text-teal-800 text-xs font-semibold rounded-full border border-teal-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-amber-500">
                        <h2 className="text-lg font-bold text-[#0f4c5c] mb-4 flex items-center gap-2">
                            <Award size={20} /> Certifications
                        </h2>
                        <ul className="space-y-3">
                            {data.certifications.map((cert, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-amber-400 shrink-0"></div>
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Education */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-indigo-500">
                        <h2 className="text-lg font-bold text-[#0f4c5c] mb-4 flex items-center gap-2">
                            <BookOpen size={20} /> Education
                        </h2>
                        <div className="space-y-4">
                            {data.education.map((edu, i) => (
                                <div key={i} className="break-inside-avoid">
                                    <h3 className="font-bold text-slate-800 text-sm">{edu.institution}</h3>
                                    <p className="text-xs text-slate-500">{edu.period}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </aside>

                {/* Right Column: The "Sprint" (Experience) */}
                <main className="lg:col-span-8 space-y-8">
                    <div className="flex items-center gap-3 mb-2 pb-2 border-b border-slate-200">
                        <RefreshCcw size={24} className="text-[#0f4c5c]" />
                        <h2 className="text-2xl font-bold text-[#0f4c5c]">Experience Log</h2>
                    </div>

                    <div className="space-y-6">
                        {data.experience.map((job, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden break-inside-avoid">
                                {/* Card Header */}
                                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0f4c5c]">{job.role}</h3>
                                        <div className="text-teal-600 font-medium flex items-center gap-1">
                                            <GitBranch size={14} /> {job.company}
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-slate-200 text-slate-600 text-xs font-mono rounded">
                                        {job.duration}
                                    </span>
                                </div>

                                {/* Card Body */}
                                <div className="p-6">
                                    <div className="space-y-3">
                                        {job.achievements.map((ach, i) => (
                                            <div key={i} className="flex items-start gap-3 group">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:bg-teal-600 transition-colors shrink-0"></div>
                                                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">
                                                    {ach}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

            </div>
        </div>
    );
};

export default AgileFlow;
