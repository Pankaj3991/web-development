function Hello() {
    return <h1> Hello World!</h1>;
  }
  
  const container = document.querySelector('#mydiv');
  const root = ReactDOM.createRoot(container);
  root.render(<Hello />)