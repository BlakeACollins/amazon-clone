import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer'
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'
import Orders from './Orders'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51IOAieJA7RSaElYqFpUp3gk767J0hwp3EdQI3JO7YnHSvvmy1HgQUkQ1cCsBVq6ZmTmvOIjkj3dNhEk5ZPoIs6do00VxfRJXGz');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe= auth.onAuthStateChanged((authUser => {
      if (authUser) {
        
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    }))
    return () => {
      unsubscribe();
    }
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/orders'>
              <Header />
              <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>

    </Router>
    
  );
}

export default App;