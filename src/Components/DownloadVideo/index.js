import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

import Processing from '../../Modal/Processing';

const DownloadVideo = () => {
  const statusUpload= 'upload'
  const [isOpenModalProcess, setOpenModalProcess] = useState(false)

  const handleDirectVoiceOverChange = () => {
    setOpenModalProcess(true)
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <Card className="p-4 shadow-sm" style={{ maxWidth: '676px', width: '100%' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Button variant="link" className="p-0">
            <i className="bi bi-arrow-left"></i>
          </Button>
          <h4 className="text-center mx-auto">Video Has Optimized Successfully</h4>
        </div>

        <div
          className="text-center d-flex align-items-center justify-content-center"
          style={{ height: '300px', backgroundColor: '#D9D9D9', borderRadius: '8px', marginBottom: '20px' }}
        >
          {/* Video preview will be placed here */}
        </div>

        <div className="d-flex justify-content-center">
          <button variant="success" className="d-flex align-items-center" 
            onClick={handleDirectVoiceOverChange}
            style={{ padding: '10px 30px', borderRadius: '50px' }}>
            Download Processed Video <i className="bi bi-download ml-2"></i>
          </button>
        </div>
      </Card>
      {
        isOpenModalProcess &&
        <Processing
          show={isOpenModalProcess}
          onHide={() => setOpenModalProcess(false)}
          status={statusUpload}
        />
      }
    </div>
  );
};

export default DownloadVideo;
