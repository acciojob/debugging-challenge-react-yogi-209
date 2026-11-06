import React from 'react';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="app-container">
      <h1>JSX Keyword Replacement Challenge</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        
        <label htmlFor="username" className="label-style">Username:</label>
        <input id="username" type="text" />

        
        <button type="submit" onClick={handleClick} className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;