import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const phoneExists = yield select(state => state.cart.find(p => p.id === id));

  const stock = yield call(api.get, `products/${id}`);

  const stockQuantity = stock.data.quantity;
  const currentAmount = phoneExists ? phoneExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockQuantity) {
    toast.error('Produto fora de estoque');
    return;
  }

  if (phoneExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;
  const stock = yield call(api.get, `products/${id}`);

  const stockAmount = stock.data.quantity;

  if (amount > stockAmount) {
    toast.error('Produto fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
