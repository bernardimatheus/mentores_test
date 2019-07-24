import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import { ColBootstrap, Container, ButtonBootstrap } from './styles';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

// import { Container } from './styles';

class Detail extends Component {
  state = {
    phone: {},
  };

  async componentDidMount() {
    const { match } = this.props;

    const response = await api.get(`products/${match.params.id}`);

    const data = {
      ...response.data,
      priceFormatted: formatPrice(response.data.price),
    };

    this.setState({
      phone: data,
    });
  }

  handleAddPhone = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { phone } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <Row>
          <ColBootstrap sm>
            <div>
              <img src={phone.picture} alt={phone.title} />
            </div>

            <h2>{phone.title}</h2>
            <strong>Marca</strong>
            <span>{phone.brand}</span>
            <strong>Memória</strong>
            <span>{phone.memory}</span>
            <strong>Chip</strong>
            <span>{phone.chipType}</span>

            <strong>Descrição</strong>
            <span>{phone.description}</span>
            <strong>Preço</strong>
            <span>{phone.priceFormatted}</span>

            <ButtonBootstrap
              type="button"
              onClick={() => this.handleAddPhone(phone.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />{' '}
                {amount[phone.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </ButtonBootstrap>
          </ColBootstrap>
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
)(Detail);
