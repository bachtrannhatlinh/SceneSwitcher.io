import React, { useState } from 'react';

import Processing from '../Processing';

const VideoPreview = () => {
  const statusVoiceOverChange = 'voice_over_change'
  const [isOpenModalProcess, setOpenModalProcess] = useState(false)

  const handleDirectVoiceOverChange = () => {
    setOpenModalProcess(true)
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="card text-center" style={{ width: '20rem', padding: '1rem' }}>
          <h5 className="card-title mb-4">Preview your new Video</h5>
          <div className="card-body">
            <div
              className="border mb-3"
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#e0e0e0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#777',
              }}
            >
              Video Here
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-secondary">Skip</button>
              <button className="btn btn-success" onClick={handleDirectVoiceOverChange}>Process</button>
            </div>
          </div>
          <small className="text-muted mt-2">
            Please Note That When You Click Download The Watermark Will Be Removed
          </small>
        </div>
      </div>
      {
        isOpenModalProcess &&
        <Processing
          show={isOpenModalProcess}
          onHide={() => setOpenModalProcess(false)}
          status={statusVoiceOverChange}
        />
      }
    </>
  );
};

export default VideoPreview;
