import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import { Container, ColBootstrap, ButtonBootstrap } from './styles';

class Home extends Component {
  state = {
    phones: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(phone => ({
      ...phone,
      priceFormatted: formatPrice(phone.price),
    }));

    this.setState({
      phones: data,
    });
  }

  handleAddPhone = phone => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_CART',
      phone,
    });
  };

  render() {
    const { phones } = this.state;
    return (
      <Container>
        <Row>
          {phones.map(phone => (
            <ColBootstrap sm key={phone.id}>
              <img src={phone.picture} alt={phone.title} />
              <strong>{phone.title}</strong>
              <span>{phone.priceFormatted}</span>

              <ButtonBootstrap
                type="button"
                onClick={() => this.handleAddPhone(phone)}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </ButtonBootstrap>
            </ColBootstrap>
          ))}
        </Row>
      </Container>
    );
  }
}

export default connect()(Home);
