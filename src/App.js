import React from 'react';
import { AuthProvider } from './authentication/AuthContext';

//Navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './authentication/PrivateRoute';

//Screens
import Splash from './screens/Splash';
import Dashboard from './screens/Dashboard';


const App = () => {

  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route path='/splash' element={<Splash />} exact />

          <Route path='/' element={<PrivateRoute />} exact>
            <Route path='/' element={<Dashboard />} exact />
          </Route>

        </Routes>
      </AuthProvider>
    </Router >
  )
}

export default App;