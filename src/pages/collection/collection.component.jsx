import { connect } from 'react-redux';
import { useParams } from 'react-router';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectionShopCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss'

const CollectionPage = ({collection}) => { 
  const {collectionId} = useParams();
  const {title, items} = collection(collectionId);
  return(
    <div className="collection-page">
      <div className='title'>{title.toUpperCase()}</div>
      <div className="items">
        {
          items.map((item) => <CollectionItem key={item.id} item={item}/>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  collection: (collectionId) => selectionShopCollection(collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);