import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

import Processing from '../Processing';

const UploadNewScene = () => {
  const statusPreviewVideo = 'preview_video'
  const [isOpenModalProcess, setOpenModalProcess] = useState(false)

  const handlePreviewVideo = () => {
    setOpenModalProcess(true)
  }

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <Card className="p-4 shadow-sm" style={{ maxWidth: '676px', width: '100%' }}>
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Button variant="link" className="p-0">
                <i className="bi bi-arrow-left"></i>
              </Button>
              <h4 className="text-center mx-auto">Upload Your New Scenes</h4>
            </div>
          </div>
          <div className="mb-3" style={{ maxWidth: '580px', margin: '0 auto' }}>
            <Card body className="bg-light text-left">
              <p className="mb-2">
                - Play The Video And Pause It At The Point You Want To Replace.
              </p>
              <p className="mb-2">
                - <b>Hold Shift + Click</b> On The Video To Choose A New Video Segment To Upload And Replace The Current Segment.
              </p>
              <a href="/" className="text-primary">- Video Tutorial</a>
            </Card>
          </div>
          <div className="mb-4">
            <p className="mb-2">Video Has Uploaded</p>
            <div className="text-light d-flex align-items-center justify-content-center"
              style={{ height: '200px', backgroundColor: '#D9D9D9', width: '100%', margin: '0 auto' }}>
              Video Here
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button variant="success" style={{ maxWidth: '580px', width: '100%' }} onClick={handlePreviewVideo}>Process</button>
          </div>
        </Card>
      </div>
      {
        isOpenModalProcess &&
        <Processing
          show={isOpenModalProcess}
          onHide={() => setOpenModalProcess(false)}
          status={statusPreviewVideo}
        />
      }
    </>
  );
};

export default UploadNewScene;
