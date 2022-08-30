
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PostDetails from './components/post details/PostDetails';
import Posts from './components/posts/Posts';

function App() {
  return (
    <div >
      
      <Routes>
      <Route path="/" element={<Posts />} />
        <Route path="postdetails/:Id" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
