import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import { Api } from './constants/urls.constants';
import logo from './logo.svg';
import Layout from './components/Layout/Layout';
import LoginPage from './pages/Login.page';
import { AuthSelector } from './store/slices/auth.slice';
import UsersPage from './pages/Users.page';

function App() {
  const navigate = useNavigate();
  const authData = useSelector(AuthSelector);
  // console.log(authData);
  const [user, setUser] = useState(authData);

  useEffect(() => {
    if (!user.name) {
      navigate('/login');
    }
  }, [authData.name]);

  useEffect(() => {
    console.log('start');
    fetch(`${Api.SIGN_UP}`, {
      method: 'POST',
      body: {},
    });
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/users"
          element={
            <Layout>
               <UsersPage /> 
            </Layout>
          }
        />

        {authData.name && (
          <Route path="*" element={<Navigate to="/users" />} />
        )}

        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
      </Routes>
    </>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
