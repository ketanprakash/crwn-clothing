import { CustomButton } from '../custom-button/custom-button.component'
import { useNavigate } from 'react-router-dom'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({hidden, cartItems, ...otherprops}) => {
  const navigate = useNavigate();
  if (hidden) return (null);
  return (
    <div className="cart-dropdown">
      {cartItems.length 
        ? 
      <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem key = {cartItem.id} item={cartItem}/>)
        }
      </div>
        : 
      <span className='empty-message'>NO ITEMS IN THE CART</span>
      }
      <CustomButton onClick={() => {navigate('/checkout'); otherprops.dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);