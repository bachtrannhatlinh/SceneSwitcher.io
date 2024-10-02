import React from 'react'

import './styled.scss'

export default function TimelineStatus() {
  const steps = [
    { label: "Upload" },
    { label: "Scene Change" },
    { label: "Voice Over Change" },
    { label: "Background Music Change" },
    { label: "Download" }
  ];

  return (
    <div className='layout-time-line-status d-block mx-auto'>
      <div className="timeline">
        <div className="timeline-line"></div>
        {steps.map((step, index) => (
          <div key={index} className="timeline-step">
              <div className='label'>{step.label}</div>
              <div className="circle"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
