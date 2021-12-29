import './checkout-item.styles.scss'
import { addItem, removeItem, decreaseItemQuantity } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({cartItem, removeItem, addItem, decreaseItemQuantity}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt="item" />
    </div>
    <span className='name'>{cartItem.name}</span>
    <span className='quantity'>
      <div className="arrow" onClick={() => {cartItem.qty > 1 ? decreaseItemQuantity(cartItem) : removeItem(cartItem)}}>&#10092;</div>
      <span className="value">{cartItem.qty}</span>
      <div className="arrow" onClick={() => addItem(cartItem)}>&#10093;</div>
    </span>
    <span className='price'>${cartItem.price}</span>
    <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  decreaseItemQuantity: (item) => dispatch(decreaseItemQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);