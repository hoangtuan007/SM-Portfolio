import React, { useState } from 'react';
import { RESUME_DATA as SM_DATA } from './constants';
import { RESUME_DATA as DOTNET_DATA } from './constants_dotnet';
import { TemplateType, ProfileType } from './types';
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
  const [currentProfile, setCurrentProfile] = useState<ProfileType>('SM');

  const data = currentProfile === 'SM' ? SM_DATA : DOTNET_DATA;

  const renderTemplate = () => {
    switch (currentTemplate) {
      case TemplateType.ExecutiveSidebar:
        return <ExecutiveSidebar data={data} />;
      case TemplateType.ModernClean:
        return <ModernClean data={data} />;
      case TemplateType.TechDark:
        return <TechDark data={data} />;
      case TemplateType.TimelineCreative:
        return <TimelineCreative data={data} />;
      case TemplateType.GridAnalyst:
        return <GridAnalyst data={data} />;
      case TemplateType.AgileFlow:
        return <AgileFlow data={data} />;
      default:
        return <ExecutiveSidebar data={data} />;
    }
  };

  return (
    <div className="antialiased">
      {renderTemplate()}
      <TemplateSelector
        currentTemplate={currentTemplate}
        onSelect={setCurrentTemplate}
        currentProfile={currentProfile}
        onProfileChange={setCurrentProfile}
      />
    </div>
  );
};

export default App;