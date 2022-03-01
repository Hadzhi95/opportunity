import {
  Routes,
  Route,
} from "react-router-dom";
import Crm from "./components/pages/CrmPage";
import { Header } from "./components/Header/Header";
import InfoProject from "./components/pages/InfoProjectPage";
import Login from "./components/pages/LoginPage";
import Main from "./components/pages/MainPage";
import Register from "./components/pages/RegisterPage";
import PostPage from "./components/pages/PostPage";

import StartApPostsPage from "./components/pages/StartApPostsPage";
import UserProfile from "./components/pages/UserProfilePage";
import WorkersPage from "./components/pages/WorkersPage";
import WorkerProfilePage from "./components/pages/WorkerProfilePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/crm" element={<Crm />} />
        <Route path="/infoproject" element={<InfoProject />} />
        <Route path="/startappage" element={<PostPage />} />
        <Route path="/startapposts" element={<StartApPostsPage />} />
        <Route path="/workerprofile/:id" element={<WorkerProfilePage />} />
        <Route path="/workers" element={<WorkersPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </>

  );
}

export default App;

