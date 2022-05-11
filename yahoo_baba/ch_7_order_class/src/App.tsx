const App = () => {
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col order-md-last orange">Col 1</div>
        <div className="col pink">Col 2</div>
        <div className="col order-md-first blue">Col 3</div>
        <div className="col green">Col 4</div> */}
        {/* 
        <div className="col order-2 orange">Col 1</div>
        <div className="col order-3 pink">Col 2</div>
        <div className="col order-4 blue">Col 3</div>
        <div className="col order-1 green">Col 4</div> */}

        <div className="col order-md-2 orange">Col 1</div>
        <div className="col order-md-3 pink">Col 2</div>
        <div className="col order-md-4 blue">Col 3</div>
        <div className="col order-md-1 green">Col 4</div>
      </div>
    </div>
  );
};

export default App;
