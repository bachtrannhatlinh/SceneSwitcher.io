import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStatusContext } from './context/StatusContext'

import Login from './Pages/Login';
import Products from './Pages/Products';

import Processing from './Components/Processing'
import VideoUploadForm from './Components/VideoUploadForm'
import UploadNewScene from './Components/UploadNewScene'
import VideoPreview from './Components/PreviewVideo'
import VideoUploadFormClone from './Components/VideoUploadFormClone'

import './App.css';

function App() {
  const { stateStatus } = useStatusContext();

  function ChildrenLayout () {
    switch (stateStatus.status) {
      case 'upload':
        return <VideoUploadForm />
      case 'upload_new_scene':
        return <UploadNewScene />
      case 'preview_video':
        return <VideoPreview />
      case 'voice_over_change':
        return <VideoUploadFormClone />
      case 'background_music_change':
        return { status: 'background_music_change' }
      case 'download':
        return { status: 'download' }
      default:
        return <Processing/>
    }
  }

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <Products>
                {ChildrenLayout(stateStatus)}
              </Products>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
