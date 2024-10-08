import React , { useState } from 'react';
import { Container } from 'react-bootstrap';

import Processing from '../Processing';
import { useStatusContext } from '../../context/StatusContext'

const VideoUploadFormClone = () => {
  const { stateStatus, updateStatus } = useStatusContext();
  const [isOpenModalProcess, setOpenModalProcess] = useState(false)

  const handleUploadForm = () => {
    setOpenModalProcess(true)
    updateStatus({ status: 'upload' })
  }

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center flex-grow-1">
        <div className="container-fluid my-5">
          <div className="row">
            {/* Left Column: Upload and Customize */}
            <button type="button" className="btn btn-primary" onClick={handleUploadForm}>
              Back home
            </button>

          </div>

        </div>
      </Container>
      {
        isOpenModalProcess && <Processing status={stateStatus.status} />
      }
    </>
  );
};

export default VideoUploadFormClone;
