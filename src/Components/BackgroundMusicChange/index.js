import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

import Processing from '../../Modal/Processing';

const BackgroundMusicChange = () => {
  const statusDownloadVideo = 'download_video'
  const [isOpenModalProcess, setOpenModalProcess] = useState(false)
  const [mp3Files, setMp3Files] = useState([1, 2]);

  const addMp3File = () => {
    setMp3Files([...mp3Files, mp3Files.length + 1]);
  };

  const handleDirectDownloadVideo = () => {
    setOpenModalProcess(true)
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <Card className="p-4 shadow-sm" style={{ maxWidth: '676px', width: '100%' }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Button variant="link" className="p-0">
            <i className="bi bi-arrow-left"></i>
          </Button>
          <h4 className="text-center mx-auto">Select Background Music</h4>
        </div>

        <div
          className="text-center d-flex align-items-center justify-content-center mb-4"
          style={{ height: '200px', backgroundColor: '#D9D9D9', borderRadius: '8px' }}
        >
          <i className="bi bi-play-circle" style={{ fontSize: '3rem' }}></i>
        </div>

        {mp3Files.map((file, index) => (
          <div key={index} className="mb-4">
            <Form.Group controlId={`formFile${file}`} className="mb-3">
              <Form.Label>Upload MP3 {file}:</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>What Second Should This MP3 Play From? (In minutes)</Form.Label>
              <div className="d-flex">
                <Form.Control type="text" placeholder="00:00" className="me-2" />
                <Form.Control type="text" placeholder="00:30" />
              </div>
            </Form.Group>
          </div>
        ))}

        <Button variant="outline-success" onClick={addMp3File} className="mb-4">
          <i className="bi bi-plus-circle me-2"></i> Upload More MP3
        </Button>

        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={handleDirectDownloadVideo}>Create</button>
        </div>
      </Card>
      {
        isOpenModalProcess &&
        <Processing
          show={isOpenModalProcess}
          onHide={() => setOpenModalProcess(false)}
          status={statusDownloadVideo}
        />
      }
    </div>
  );
};

export default BackgroundMusicChange;
