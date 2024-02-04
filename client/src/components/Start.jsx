import React from 'react';
import { MdCloudUpload } from 'react-icons/md';

function Start({ file, setFile, upload }) {
  return (
    <>
      <label
        htmlFor='file'
        className='py-10 px-5 flex flex-col justify-center items-center w-full cursor-pointer hover:opacity-80 relative top-0 left-0 right-0 bottom-0  h-[80%]  '
        onDrag={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          setFile(e.dataTransfer.files[0]);
        }}
      >
        <h3 className='text-2xl text-primary font-bold'>
          Upload your document
        </h3>
        <p className='text-[gray] text-center'>
          Drag and drop your file here or click to browse
        </p>
        <MdCloudUpload className='text-[100px] text-primary' />

        <p className='text-[gray] text-center'>
          {file === null
            ? 'No file chosen'
            : file.name.length > 20
            ? file.name.slice(0, 20) + '...' + file.name.slice(-5)
            : file.name}
        </p>
        <input
          id='file'
          name='file'
          className='hidden'
          type='file'
          onChange={(e) =>
            setFile(e.target.files[0] ? e.target.files[0] : null)
          }
        />
      </label>
      <button
        disabled={file === null}
        className='border border-primary px-5 py-2 rounded-md  text-primary mb-5 hover:bg-primary hover:text-main transition-all duration-300 ease-in-out  active:bg-primary active:text-white active:border-primary'
        onClick={upload}
      >
        Upload
      </button>
    </>
  );
}

export default Start;
