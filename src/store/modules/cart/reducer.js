import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const phoneIndex = draft.findIndex(p => p.id === action.phone.id);

        if (phoneIndex >= 0) {
          draft[phoneIndex].amount += 1;
        } else {
          draft.push({
            ...action.phone,
            amount: 1,
          });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const phoneIndex = draft.findIndex(p => p.id === action.id);

        if (phoneIndex >= 0) {
          draft.splice(phoneIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

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
