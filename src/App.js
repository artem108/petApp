import React from 'react';
import './App.css';

const setUrl = () => {
  const e = ['🏻', '🏼', '🏽', '🏾', '🏿'];
  let s = '', i, m;

  for (i = 0; i < 10; i ++) {
    m = Math.floor(e.length * ((Math.sin((Date.now()/100) + i)+1)/2));
    s += '👶' + e[m];
  }

  window.location.hash = s;
  setTimeout(setUrl, 50);
}

const App = () => {
  setUrl();
  return (
    <div className="app">
      <section className="imageBg"></section>
    </div>
  )
}

export default App;
