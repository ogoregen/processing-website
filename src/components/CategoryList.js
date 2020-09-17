import React from 'react';

import SubcategoryList from './SubcategoryList';

import css from './CategoryList.module.css';
import grid from '../styles/grid.module.css';

const CategoryList = (props) => {
  const { category, categoryRefs, subcategory, link } = props;

  return (
    <div className={grid.grid}>
      <h2 className={grid.col1andhalf}>{category}</h2>
      <ul>
        {subcategory.map((p, key) => {
          let subcategoryRefs = categoryRefs.filter((ref) => {
            return ref.childJson.subcategory === p;
          });
          return (
            <SubcategoryList
              key={key + 's'}
              subcategory={p}
              subcategoryRefs={subcategoryRefs}
              link={link}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
