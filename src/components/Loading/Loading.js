import React from 'react';

import { useSelector } from 'react-redux';

const Loading = () => {

  const loading = useSelector(state => state.loading);

  return (
    <div className='container fade'>

      <div className='flicker'>
        <p className='interface-text'>
          {loading.message}
        </p>
        <br />
      </div>
      <div style={{ display: 'inline-block' }}>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
      </div>
    </div>
  )
}

export default Loading;