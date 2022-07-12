import React from 'react';
import { AuthProvider } from './authentication/AuthContext';

//Navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './authentication/PrivateRoute';

//Screens
import Splash from './screens/Splash';
import Dashboard from './screens/Dashboard';
import Game from './screens/Game';

//Store
import store from './store';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <Routes>

            <Route path='/splash' element={<Splash />} exact />

            <Route path='/' element={<PrivateRoute />} exact>
              <Route path='/' element={<Dashboard />} exact />
            </Route>

            <Route path='/game' element={<PrivateRoute />} exact>
              <Route path='/game' element={<Game />} exact />
            </Route>

          </Routes>
        </AuthProvider>
      </Router >
    </Provider>
  )
}

export default App;