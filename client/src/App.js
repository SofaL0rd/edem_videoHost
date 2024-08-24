import './App.css';
import { Header } from './components/Header';
import { Sidepanel } from './components/Sidepanel';
import { VideoPage } from './page/VideoPage';


function App() {
  return (
    <div className="App bg-[#220D44] h-full"  >
      <Header />
      <div className='flex'>
      <Sidepanel />
      <VideoPage/>
      </div>
    </div>
  );
}

export default App;
