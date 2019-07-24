import React from 'react';

import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, TableBootstrap, ButtonBootstrap, Total } from './styles';

function Cart({ cart }) {
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
                  <ButtonBootstrap type="button">
                    <MdRemoveCircleOutline size={20} color="#46a4d9" />
                  </ButtonBootstrap>
                  <input type="number" readOnly value={phone.amount} />
                  <ButtonBootstrap type="button">
                    <MdAddCircleOutline size={20} color="#46a4d9" />
                  </ButtonBootstrap>
                </div>
              </td>
              <td>
                <strong>R$3300,00</strong>
              </td>
              <td>
                <ButtonBootstrap type="button">
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
          <strong>R$1600,00</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
