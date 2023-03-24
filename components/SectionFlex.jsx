import React from 'react';
import Item from './Item';
import {ItemData} from '../data';

const SectionFlex = () => {
     const articleData = ItemData.filter(item => item.tag == 'article').slice(0,5);

    return(
        <section className='section'>
              {articleData.map( item => <Item key={item.id} data={item} />)}
        </section>
         
    );
}

export default SectionFlex;