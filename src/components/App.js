import {Routes,Route} from 'react-router-dom';
import {NavBar,Home,PostDetail,CreatePost} from './index';


function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
       
    </div>
  );
}

export default App;
