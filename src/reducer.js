import {
	CLEAR_CART,
	DECREASE,
	GET_TOTALS,
	INCREASE,
	TOGGLE_AMOUNT,
	REMOVE,
} from "./actions";

function reducer(state, action) {
	if (action.type === CLEAR_CART) {
		return {
			state,
			cart: [],
		};
	}

	if (action.type === INCREASE) {
		let tempCart = state.cart.map((item) => {
			if (item.id === action.payload.id) {
				item = { ...item, amount: item.amount + 1 };
			}

			return item;
		});

		return { ...state, cart: tempCart };
	}

	if (action.type === DECREASE) {
		let tempCart = state.cart.filter((item) => item.id !== action.payload.id);
		tempCart = state.cart.map((item) => {
			if (item.id === action.payload.id) {
				item = { ...item, amount: item.amount - 1 };
			}
			return item;
		});
		return { ...state, cart: tempCart };
	}
	if (action.type === REMOVE) {
		return {
			...state,
			cart: state.cart.filter((item) => item.id !== action.payload.id),
		};
	}
	if (action.type === GET_TOTALS) {
		let { total, amount } = state.cart.reduce(
			(cartTotal, cartItem) => {
				const { price, amount } = cartItem;
				const itemTotal = price * amount;

				cartTotal.total += itemTotal;

				cartTotal.amount += amount;
				return cartTotal;
			},
			{
				total: 0,
				amount: 0,
			}
		);
		total = parseFloat(total.toFixed(2));
		return { ...state, total, amount };
	}

	if (action.type === TOGGLE_AMOUNT) {
		return {
			...state,
			cart: state.cart.map((item) => {
				if (item.id === action.payload.id) {
					if (action.payload.toggle === "inc") {
						return (item = { ...item, amount: item.amount + 1 });
					}
					if (action.payload.toggle === "dec") {
						return (item = { ...item, amount: item.amount - 1 });
					}
				}
				return item;
			}),
		};
	}

	return state;

	// switch (action.type) {
	// 	case CLEAR_CART:
	// 		return { ...state, cart: [] };
	// 	default:
	// 		return state;
	// }
}

export default reducer;
