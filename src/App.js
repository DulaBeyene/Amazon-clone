import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51MKSx0Cs6nZ3H7H45SZDbHXwEMGq9Lxk6Zhdh8gODsjAYUwIR0WYQBR8PWMGm35fhEcLoe9T9LvJK7FFyzg1KXTD00YXIN8sOu"
);


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/checkout" element={<><Header /><Checkout /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Elements stripe={promise}><Header /><Payment/></Elements>} />
        <Route path="/orders" element={<><Header /><Orders /></>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
//https://clone-f4474.web.app
