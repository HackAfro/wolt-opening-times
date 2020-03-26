import React from 'react';
import Clock from 'react-feather/dist/icons/clock';

import './App.css';
import Week from './components/week';

const data = {
  monday: [],
  tuesday: [
    { type: 'open', value: 36000 },
    { type: 'close', value: 64800 }
  ],
  wednesday: [],
  thursday: [
    { type: 'open', value: 36000 },
    { type: 'close', value: 64800 }
  ],
  friday: [{ type: 'open', value: 36000 }],
  saturday: [
    { type: 'close', value: 3600 },
    { type: 'open', value: 36000 }
  ],
  sunday: [
    { type: 'close', value: 3600 },
    { type: 'open', value: 43200 },
    { type: 'close', value: 75600 }
  ]
};

function App() {
  return (
    <div className='App bg-gray-200 h-screen py-32'>
      <div className='hours-section w-1/3 bg-white mx-auto shadow-lg rounded-lg py-8 px-8'>
        <div className='header pb-2 flex border-b-2 border-black items-center'>
          <Clock size='25' className='text-gray-400 mr-2' />
          <h1 className='font-bold text-3xl text-gray-800'>Opening Hours</h1>
        </div>
        <div className='body mt-2'>
          <Week week={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
