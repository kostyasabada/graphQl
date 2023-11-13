import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import { Api } from './constants/urls.constants';
import logo from './logo.svg';
import Layout from './components/Layout/Layout';
import LoginPage from './pages/Login.page';
import { AuthSelector } from './store/slices/auth.slice';
import UsersPage from './pages/Users.page';
import DisplayLocations from './components/DislplayLocations';

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
              {/* <LoginPage /> */}
              <DisplayLocations />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
