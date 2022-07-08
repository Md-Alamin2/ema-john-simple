import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./AuthContext/AuthProvider";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";
import Singin from "./components/SingIn/Singin";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Shop/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/review" element={<OrderReview/>} />
            <Route path="/palceorder" element={<PrivateRoute> <PlaceOrder/></PrivateRoute>} />
            <Route path="/inventory" element={<PrivateRoute><Inventory/></PrivateRoute>} />
            <Route path="shipping" element={<PrivateRoute><Shipping/></PrivateRoute>}/>
            <Route path="/singin" element={<Singin/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
