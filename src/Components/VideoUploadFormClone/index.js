import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import Processing from '../Processing';
import { useStatusContext } from '../../context/StatusContext'

const VideoUploadFormClone = () => {
  const { stateStatus, updateStatus } = useStatusContext();
  const [status, setStatus] = useState(null)

  useEffect(() => { 
    const timeoutId = setTimeout(() => {
      setStatus(stateStatus.status);
    }, 2000);

    return () => clearTimeout(timeoutId);
  },[stateStatus.status])

  const handleUploadForm = () => {
    updateStatus({status: 'upload'})
  }

  return (
    <>
      {
        status === 'scene_change' ?
          <Container className="d-flex justify-content-center align-items-center flex-grow-1">
            <div className="container-fluid my-5">
              <div className="row">
                {/* Left Column: Upload and Customize */}
                    <button type="button" className="btn btn-primary" onClick={handleUploadForm}>
                      Back home
                    </button>

                </div>

              </div>
          </Container> :
          <Processing />
      }
    </>
  );
};

export default VideoUploadFormClone;
