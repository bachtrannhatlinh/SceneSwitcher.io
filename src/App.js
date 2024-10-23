import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStatusContext } from './context/StatusContext'

import Login from './Pages/Login';
import Products from './Pages/Products';

import Processing from './Components/Processing'
import VideoUploadForm from './Components/VideoUploadForm'
import UploadNewScene from './Components/UploadNewScene'
import VideoPreview from './Components/PreviewVideo'
import VoiceOverChange from './Components/VoiceOverChange'
import BackgroundMusicChange from './Components/BackgroundMusicChange'
import DownloadVideo from './Components/DownloadVideo'

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
        return <VoiceOverChange />
      case 'background_music_change':
        return <BackgroundMusicChange />
      case 'download_video':
        return <DownloadVideo />
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
