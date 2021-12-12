import React from 'react';
import SHOP_DATA from './shop.data'
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';
export class ShopPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render(){
    return (
      <div className = "shop-page">
        {
          this.state.collections.map(({id, ...otherCollectionsProps}) => (
            <CollectionPreview key={id} {...otherCollectionsProps}/>
          ))
        }
      </div>
    )
  }
}