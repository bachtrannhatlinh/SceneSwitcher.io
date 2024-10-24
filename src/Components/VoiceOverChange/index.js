import React, { useState } from 'react';
import { Button, Card, Form, InputGroup, FormControl } from 'react-bootstrap';

import ConfirmationModal from '../../Modal/Confirm'

const VoiceOverChange = () => {
  const statusBackgroundMusicChange = 'background_music_change'
  const [isOpenModalConfirmation, setOpenModalConfirmation] = useState(false)

  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState('#000000');
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('No file chosen');
    }
  };

  const handleDirectBackgroundMusicChange = (e) => {
    e.preventDefault(); 
    setOpenModalConfirmation(true)
  }

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <Card className="p-4 shadow-sm" style={{ maxWidth: '676px', width: '100%' }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Button variant="link" className="p-0">
              <i className="bi bi-arrow-left"></i>
            </Button>
            <h4 className="text-center mx-auto">Select Your New Voiceover</h4>
          </div>

          <Form>
            <Form.Group className="mb-3">
            <Form.Label>Eleven Labs API Key:</Form.Label>
            <Form.Control type="text" placeholder="Enter Eleven Labs API Key" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>New Voice ID:</Form.Label>
            <Form.Control type="text" placeholder="Enter Voice ID" />
          </Form.Group>

          <h5 className="mb-3">Subtitle Design</h5>

          <Form.Group className="mb-3">
            <Form.Label>Upload Font File:</Form.Label>
            <InputGroup>
              <FormControl type="file" onChange={handleFileChange} />
              <FormControl placeholder={fileName} readOnly />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Subtitle Box Colour:</Form.Label>
            <InputGroup>
              <FormControl
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <FormControl placeholder={color} readOnly />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Font Size:</Form.Label>
            <InputGroup className="align-items-center">
              <FormControl
                type="range"
                min="10"
                max="40"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
              />
              <FormControl
                type="text"
                value={fontSize}
                readOnly
                style={{ width: '50px', marginLeft: '10px' }}
              />
            </InputGroup>
          </Form.Group>

          <h5 className="mb-3">Preview:</h5>

          <div
            className="text-center d-flex flex-column align-items-center justify-content-center"
            style={{ height: '150px', backgroundColor: '#D9D9D9', borderRadius: '8px' }}
          >
            <div>Your Selected Video Scene Will Go Here</div>
            <div
              className="mt-3 p-2"
              style={{
                backgroundColor: color,
                fontSize: `${fontSize}px`,
                color: '#fff',
                borderRadius: '4px',
              }}
            >
              This Is How Your Original Subtitle Text Will Be Displayed
            </div>
          </div>

            <div className="d-flex justify-content-between mt-4">
              <Button variant="outline-dark">Skip</Button>
              <Button variant="success" type="submit" onClick={handleDirectBackgroundMusicChange}>Process</Button>
            </div>
          </Form>
        </Card>
      </div>
      {
        isOpenModalConfirmation &&
        <ConfirmationModal
          show={isOpenModalConfirmation}
          onHide={() => setOpenModalConfirmation(false)}
          status={statusBackgroundMusicChange}
        />
      }
    </>
  );
};

export default VoiceOverChange;
