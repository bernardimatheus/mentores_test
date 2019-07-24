import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { phone } = action;

        draft.push(phone);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const phoneIndex = draft.findIndex(p => p.id === action.id);

        if (phoneIndex >= 0) {
          draft.splice(phoneIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const phoneIndex = draft.findIndex(p => p.id === action.id);

        if (phoneIndex >= 0) {
          draft[phoneIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
