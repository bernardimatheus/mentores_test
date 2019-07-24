import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row } from 'react-bootstrap';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

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
    const { addToCart } = this.props;

    addToCart(phone);
  };

  render() {
    const { phones } = this.state;
    const { amount } = this.props;
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
                  <MdAddShoppingCart size={16} color="#FFF" />{' '}
                  {amount[phone.id] || 0}
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, phone) => {
    amount[phone.id] = phone.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
