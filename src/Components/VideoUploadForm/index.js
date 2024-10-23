import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Processing from '../Processing';

const VideoUploadForm = () => {
  const uploadNewScene = 'upload_new_scene'
  const [isOpenModalProcess, setOpenModalProcess] = useState(false)

  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#000000");

  const handleFontSizeChange = (e) => setFontSize(e.target.value);
  const handleFontColorChange = (e) => setFontColor(e.target.value);
  const handleBgColorChange = (e) => setBgColor(e.target.value);

  const handleUploadForm = () => {
    setOpenModalProcess(true)
  }

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center flex-grow-1">
        <div className="container-fluid my-5">
          <div className="row">
            {/* Left Column: Upload and Customize */}
            <div className="col-md-6" style={{ background: '#FFFFFF' }}>
              <h3>Upload And Customize</h3>
              <form>
                {/* Upload Section */}
                <div className="mb-3">
                  <label className="form-label">Upload Your Video:</label>
                  <input type="file" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Video's MP3 File:</label>
                  <input type="file" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Video's Transcribed Text File:</label>
                  <input type="file" className="form-control" />
                </div>

                {/* Subtitle Design Section */}
                <h4>Subtitle Design</h4>

                <div className="mb-3">
                  <label className="form-label">Upload Font File:</label>
                  <input type="file" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Font Size: {fontSize}px</label>
                  <input
                    type="range"
                    className="form-range"
                    min="10"
                    max="50"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Font Color:</label>
                  <input
                    type="color"
                    className="form-control form-control-color"
                    value={fontColor}
                    onChange={handleFontColorChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Subtitles Background Color:</label>
                  <input
                    type="color"
                    className="form-control form-control-color"
                    value={bgColor}
                    onChange={handleBgColorChange}
                  />
                </div>

                <button type="button" className="btn btn-primary" onClick={handleUploadForm}>
                  Process
                </button>
              </form>

            </div>

            <div className="col-md-1 d-flex justify-content-center">
              <div style={{ width: '1px', backgroundColor: '#ccc', height: '100%' }}></div>
            </div>

            {/* Right Column: Tutorial and Preview */}
            <div className="col-md-5 d-flex">
              <div className="row">
                {/* Tutorial Section */}
                <div className="col-12 mb-4">
                  <h5 className="text-center">Tutorial</h5>
                  <div
                    style={{
                      width: '100%',
                      height: '250px',
                      backgroundColor: '#e0e0e0',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {/* Placeholder for tutorial content */}
                    <p>Tutorial Content Goes Here</p>
                  </div>
                </div>

                {/* Preview Section */}
                <div className="col-12">
                  <h5 className="text-center">Preview</h5>
                  <div
                    style={{
                      width: '100%',
                      height: '370px',
                      backgroundColor: '#f0f0f0',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative',
                    }}
                  >
                    {/* Placeholder for new scene */}
                    <p>Your New Scene Will Go Here</p>

                    {/* Subtitle preview box */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        width: '80%',
                        backgroundColor: '#000',
                        color: '#fff',
                        textAlign: 'center',
                        padding: '10px',
                        borderRadius: '5px',
                      }}
                    >
                      This Is How Your Original Subtitle Text Will Be Displayed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {
        isOpenModalProcess && 
        <Processing 
          show={isOpenModalProcess} 
          onHide={() => setOpenModalProcess(false)}
          status={uploadNewScene} 
        />
      }
    </>
  );
};

export default VideoUploadForm;
