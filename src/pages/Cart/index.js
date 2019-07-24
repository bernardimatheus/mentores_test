import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, TableBootstrap, ButtonBootstrap, Total } from './styles';

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(phone) {
    updateAmountRequest(phone.id, phone.amount + 1);
  }
  function decrement(phone) {
    updateAmountRequest(phone.id, phone.amount - 1);
  }

  return (
    <Container>
      <TableBootstrap>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(phone => (
            <tr key={phone.id}>
              <td>
                <img src={phone.picture} alt={phone.title} />
              </td>
              <td>
                <strong>{phone.title}</strong>
                <span>{phone.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <ButtonBootstrap
                    type="button"
                    onClick={() => decrement(phone)}
                  >
                    <MdRemoveCircleOutline size={20} color="#46a4d9" />
                  </ButtonBootstrap>
                  <input type="number" readOnly value={phone.amount} />
                  <ButtonBootstrap
                    type="button"
                    onClick={() => increment(phone)}
                  >
                    <MdAddCircleOutline size={20} color="#46a4d9" />
                  </ButtonBootstrap>
                </div>
              </td>
              <td>
                <strong>{phone.subtotal}</strong>
              </td>
              <td>
                <ButtonBootstrap
                  type="button"
                  onClick={() => removeFromCart(phone.id)}
                >
                  <MdDelete size={20} color="#46a4d9" />
                </ButtonBootstrap>
              </td>
            </tr>
          ))}
        </tbody>
      </TableBootstrap>

      <footer>
        <ButtonBootstrap type="button">Finalizar pedido</ButtonBootstrap>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(phone => ({
    ...phone,
    subtotal: formatPrice(phone.price * phone.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, phone) => {
      return total + phone.price * phone.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
