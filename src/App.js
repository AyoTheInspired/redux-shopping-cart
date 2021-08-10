import React from "react";
import { createStore } from "redux";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";

const initialStore = {
	count: 78,
};

function reducer(state, action) {
	console.log({ state, action });
	if (action.type === "DECREASE") {
		return { count: state.count - 1 };
		console.log("Hey, it worked");
	}
	return state;
}
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "RESET" });
console.log(store.getState());

function App() {
	// cart setup
	return (
		<main>
			<Navbar cart={store.getState()} />
			<CartContainer cart={cartItems} />
		</main>
	);
}

export default App;
