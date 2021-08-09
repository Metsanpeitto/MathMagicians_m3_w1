import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;

    return (
      <div className="calculator-body">
        <div className="body-result">
          <h5>{result}</h5>
        </div>
        <div className="body-buttons">
          <div className="buttons-row-1">
            <button type="button" className="col-1 ">
              AC
            </button>
            <button type="button" className="col-2 ">
              +/-
            </button>
            <button type="button" className="col-3 ">
              %
            </button>
            <button type="button" className="col-4 orange">
              /
            </button>
          </div>
          <div className="buttons-row-2">
            <button type="button" className="col-1 ">
              7
            </button>
            <button type="button" className="col-2 ">
              8
            </button>
            <button type="button" className="col-3 ">
              9
            </button>
            <button type="button" className="col-4 orange">
              x
            </button>
          </div>
          <div className="buttons-row-3">
            <button type="button" className="col-1 ">
              4
            </button>
            <button type="button" className="col-2 ">
              5
            </button>
            <button type="button" className="col-3 ">
              6
            </button>
            <button type="button" className="col-4 orange">
              -
            </button>
          </div>
          <div className="buttons-row-4">
            <button type="button" className="col-1 ">
              1
            </button>
            <button type="button" className="col-2 ">
              2
            </button>
            <button type="button" className="col-3 ">
              3
            </button>
            <button type="button" className="col-4 orange">
              +
            </button>
          </div>
          <div className="buttons-row-5">
            <button type="button" className="col-1-2 ">
              0
            </button>
            <button type="button" className="col-3 ">
              .
            </button>
            <button type="button" className="col-4 orange">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
