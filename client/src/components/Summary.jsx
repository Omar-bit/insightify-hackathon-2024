import React from 'react';

function Summary({ file }) {
  return (
    <div className='flex flex-col gap-5'>
      {' '}
      <h2 className='font-bold text-xl'>Summary</h2> <p>{file}</p>{' '}
    </div>
  );
}

export default Summary;
