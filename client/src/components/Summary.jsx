import React from 'react';

function Summary({ file }) {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='typing-demo font-bold text-xl'>Summary</h2>
      <div class='wrapper'>
        <p>{file}</p>{' '}
      </div>
    </div>
  );
}

export default Summary;
