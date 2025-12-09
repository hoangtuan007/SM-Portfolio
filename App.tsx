import React, { useState } from 'react';
import { RESUME_DATA } from './constants';
import { TemplateType } from './types';
import TemplateSelector from './components/TemplateSelector';

// Template Imports
import ExecutiveSidebar from './components/templates/ExecutiveSidebar';
import ModernClean from './components/templates/ModernClean';
import TechDark from './components/templates/TechDark';
import TimelineCreative from './components/templates/TimelineCreative';
import GridAnalyst from './components/templates/GridAnalyst';
import AgileFlow from './components/templates/AgileFlow';

const App: React.FC = () => {
  const [currentTemplate, setCurrentTemplate] = useState<TemplateType>(TemplateType.ExecutiveSidebar);

  const renderTemplate = () => {
    switch (currentTemplate) {
      case TemplateType.ExecutiveSidebar:
        return <ExecutiveSidebar data={RESUME_DATA} />;
      case TemplateType.ModernClean:
        return <ModernClean data={RESUME_DATA} />;
      case TemplateType.TechDark:
        return <TechDark data={RESUME_DATA} />;
      case TemplateType.TimelineCreative:
        return <TimelineCreative data={RESUME_DATA} />;
      case TemplateType.GridAnalyst:
        return <GridAnalyst data={RESUME_DATA} />;
      case TemplateType.AgileFlow:
        return <AgileFlow data={RESUME_DATA} />;
      default:
        return <ExecutiveSidebar data={RESUME_DATA} />;
    }
  };

  return (
    <div className="antialiased">
      {renderTemplate()}
      <TemplateSelector
        currentTemplate={currentTemplate}
        onSelect={setCurrentTemplate}
      />
    </div>
  );
};

export default App;