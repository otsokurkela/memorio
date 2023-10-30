import React, { useState } from 'react';
import accessTokenDated from './utils/accessTokenDated';

export default function Home() {
  console.log(accessTokenDated());
  return (
    <div>
      <div className="main">
        <h1>Home</h1>
      </div>
    </div>
  );
}
