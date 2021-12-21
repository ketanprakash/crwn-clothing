import { CustomButton } from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'
import { connect } from 'react-redux';

const CartDropdown = ({hidden}) => {
  if (hidden) return (null);
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = ({cart}) => ({
  hidden: cart.hidden
})

export default connect(mapStateToProps)(CartDropdown);