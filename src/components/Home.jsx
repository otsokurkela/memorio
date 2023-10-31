import React, { useState } from 'react';
import './../styles/home.css';

import RecentSets from './home/RecentSets';
import Library from './home/Library';

export default function Home() {
  return (
    <div>
      <div className="main">
        <RecentSets />
        <Library />
      </div>
    </div>
  );
}
