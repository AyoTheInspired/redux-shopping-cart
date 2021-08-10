import React from "react";
import { createStore } from "redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import reducer from "./reducer";
import { Provider } from "react-redux";

const initialStore = {
	cart: cartItems,
	amount: 5,
	total: 105,
};

const store = createStore(reducer, initialStore);

function App() {
	return (
		<Provider store={store}>
			<Navbar />
			<CartContainer />
		</Provider>
	);
}

export default App;
