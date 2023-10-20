const AppLayout = () => (
  <div className="app">
    <Header />
  </div>
);

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        src="https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg"
        alt="OrderQuick"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li className="list-item">Home</li>
        <li className="list-item">About</li>
        <li className="list-item">Cart</li>
      </ul>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
