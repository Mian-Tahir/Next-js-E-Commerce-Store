import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CategoriesSkeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-28">
      {Array(4) 
        .fill(0)
        .map((_, index) => (
          <div key={index} className="p-9 border">
            <Skeleton height={50} />
          </div>
        ))}
    </div>
  );
};

export default CategoriesSkeleton;
