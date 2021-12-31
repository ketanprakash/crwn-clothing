import React from 'react';
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'
import { Link } from 'react-router-dom';

export const CollectionPreview = ({title, routeName, items}) => (
  <div className="collection-preview">
    <h1 className="title"><Link to={`/shop/${routeName}`}>{title.toUpperCase()}</Link></h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key = {item.id} item={item}/>
        ))
      }
    </div>
  </div>
)
