import './collections-overview.styles.scss'
import { CollectionPreview } from '../collection-preview/collection-preview.component'
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

const CollectionsOverview = ({collections}) => (
  <div className="collections-overview">
    {
      collections.map(({id, ...otherCollectionsProps}) => (
        <CollectionPreview key={id} {...otherCollectionsProps}/>
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview);