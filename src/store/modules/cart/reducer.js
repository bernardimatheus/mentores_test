export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_CART':
      return [
        ...state,
        {
          ...action.phone,
          amount: 1,
        },
      ];

    default:
      return state;
  }
}
