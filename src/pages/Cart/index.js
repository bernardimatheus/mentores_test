import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, TableBootstrap, ButtonBootstrap, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="https://images-submarino.b2w.io/produtos/01/00/item/129712/3/129712316_1GG.png"
                alt="phone"
              />
            </td>
            <td>
              <strong>Celular maneiro</strong>
              <span>R$1650,00</span>
            </td>
            <td>
              <div>
                <ButtonBootstrap type="button">
                  <MdRemoveCircleOutline size={20} color="#46a4d9" />
                </ButtonBootstrap>
                <input type="number" readOnly value={2} />
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
