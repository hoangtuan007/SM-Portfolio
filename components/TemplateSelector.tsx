import React, { useState } from 'react';
import { TemplateType } from '../types';
import { Palette, Layers, Monitor, Clock, Grid, Download, Loader2 } from 'lucide-react';

interface TemplateSelectorProps {
  currentTemplate: TemplateType;
  onSelect: (template: TemplateType) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ currentTemplate, onSelect }) => {
  const [isExporting, setIsExporting] = useState(false);

  const templates = [
    { type: TemplateType.ExecutiveSidebar, icon: <Layers size={18} />, label: "Executive" },
    { type: TemplateType.ModernClean, icon: <Palette size={18} />, label: "Clean" },
    { type: TemplateType.TechDark, icon: <Monitor size={18} />, label: "Tech Dark" },
    { type: TemplateType.TimelineCreative, icon: <Clock size={18} />, label: "Timeline" },
    { type: TemplateType.GridAnalyst, icon: <Grid size={18} />, label: "Analyst" },
  ];

  const handleExport = () => {
    setIsExporting(true);

    // Small timeout to allow UI to update
    setTimeout(() => {
      const element = document.getElementById('root');
      
      // @ts-ignore
      if (typeof window !== 'undefined' && window.html2pdf && element) {
        const opt = {
          margin:       [0.2, 0],
          filename:     'Tuan_Dang_Portfolio.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2, useCORS: true, scrollY: 0 },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // @ts-ignore
        window.html2pdf().set(opt).from(element).save()
          .then(() => setIsExporting(false))
          .catch((err: any) => {
            console.error("PDF Export failed:", err);
            setIsExporting(false);
            window.print(); // Fallback
          });
      } else {
        // Fallback to native print if library fails
        window.print();
        setIsExporting(false);
      }
    }, 100);
  };

  return (
    <div 
      data-html2canvas-ignore
      className="print:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md shadow-2xl rounded-full p-2 border border-slate-200 flex gap-1 sm:gap-2 items-center"
    >
      {templates.map((t) => (
        <button
          key={t.type}
          type="button"
          onClick={() => onSelect(t.type)}
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
            currentTemplate === t.type
              ? 'bg-blue-600 text-white shadow-md transform scale-105'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          {t.icon}
          <span className="hidden sm:inline">{t.label}</span>
        </button>
      ))}
      
      <div className="w-px h-6 bg-slate-300 mx-1"></div>

      <button
        type="button"
        onClick={handleExport}
        disabled={isExporting}
        className="flex items-center gap-2 px-3 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        title="Export PDF"
      >
        {isExporting ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
        <span className="hidden sm:inline">{isExporting ? 'Exporting...' : 'Export PDF'}</span>
      </button>
    </div>
  );
};

export default TemplateSelector;