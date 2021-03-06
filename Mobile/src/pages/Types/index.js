import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, StatusBar, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { Creators as ProductsActions } from '~/store/ducks/products';
import styles from './styles';
import { colors } from '~/styles';
import HeaderBack from '~/components/HeaderBack';
import Type from '~/components/Type';

const HeaderBackgroundImg = require('~/assets/img/headerBackground.png');

class Types extends Component {
  static propTypes = {
    requestTypes: PropTypes.func.isRequired,
    types: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    loading: PropTypes.bool.isRequired,
    purchaseItem: PropTypes.shape({
      idProduct: PropTypes.number,
    }).isRequired,
  };

  componentDidMount() {
    const {
      requestTypes,
      purchaseItem: { idProduct },
    } = this.props;
    requestTypes(idProduct);
  }

  createRows = (data, columns) => {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;

    while (lastRowElements !== 0) {
      data.push({
        id: lastRowElements + data.length,
        file: { url: '' },
        empty: true,
      });
      lastRowElements -= 1;
    }
    return data;
  };

  render() {
    const { requestTypes, types, loading } = this.props;
    return (
      <Fragment>
        <StatusBar backgroundColor={colors.black} barStyle={colors.barStyle} />
        <Image style={styles.background} source={HeaderBackgroundImg} />
        <HeaderBack title="Selecione um tipo" backPage="Products" />
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          data={this.createRows(types, 2)}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Type item={item} targetPage="Sizes" />}
          onRefresh={requestTypes}
          refreshing={loading}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.products.loading,
  types: state.products.types,
  error: state.products.error,
  purchaseItem: state.purchase.purchaseItem,
});
const mapDispachToProps = dispatch => bindActionCreators(ProductsActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispachToProps,
)(Types);
