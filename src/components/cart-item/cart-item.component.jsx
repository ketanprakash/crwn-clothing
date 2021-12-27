import './cart-item.styles.scss'

const CartItem = ({item: {imageUrl, price, name, qty}}) => (
  <div className="cart-item">
    <img src={imageUrl} alt={name}/>
    <div className="item-details">
      <span className="name">{name}</span>
      <div className="price">
        {qty} X {`$${price}`}
      </div>
    </div>
  </div>
)

export default CartItem;