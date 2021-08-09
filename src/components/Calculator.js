import React, { useState } from 'react';
import calculate from './logic/calculator';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [toNumber1, setToNumber1] = useState(true);
  const [operation, setOperation] = useState(null);

  const proccessResult = (result) => {
    setDisplay(result.total);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
    setToNumber1(true);
  };

  const selectOperator = (event) => {
    event.preventDefault();
    const option = event.target.innerText;
    if (
      option === '+/-'
      || option === '%'
      || option === '÷'
      || option === 'x'
      || option === '-'
      || option === '+'
    ) {
      setOperation(option);
      setToNumber1(false);
    }

    if (option === 'AC') {
      const obj = { total, next, operation };
      const result = calculate(obj, option);
      proccessResult(result);
    }

    if (option === '.') {
      const obj = { total, next, operation };
      const result = calculate(obj, option);
      setTotal(result.total);
      setDisplay(result.total);
    }

    if (option === '=') {
      const obj = { total, next, operation };
      const result = calculate(obj, option);
      proccessResult(result);
    }
  };

  const addNumber = (event) => {
    event.preventDefault();
    let newTotal = total;
    const number = event.target.innerText;
    let numberResult = null;
    let float = null;
    if (total) {
      float = total.indexOf('.');
    }

    if (display !== '0' && !next && !operation && !float) {
      newTotal = null;
    }

    if (toNumber1 === true) {
      numberResult = newTotal;
      if (numberResult) {
        numberResult += number;
      } else {
        numberResult = number;
      }
      setTotal(numberResult);
      setDisplay(numberResult);
    } else {
      numberResult = next;
      if (numberResult) {
        numberResult += number;
      } else {
        numberResult = number;
      }
      const display = `${newTotal} ${operation} ${numberResult}`;
      setNext(numberResult);
      setDisplay(display);
    }
  };

  return (
    <div className="calculator-body">
      <div className="body-result">
        <h5>{display}</h5>
      </div>
      <div className="body-buttons">
        <div className="buttons-row-1">
          <button
            onClick={selectOperator}
            name="AC"
            type="button"
            className="col-1 "
          >
            AC
          </button>
          <button
            onClick={selectOperator}
            name="+/-"
            type="button"
            className="col-2 "
          >
            +/-
          </button>
          <button
            onClick={selectOperator}
            name="%"
            type="button"
            className="col-3 "
          >
            %
          </button>
          <button
            onClick={selectOperator}
            name="÷"
            type="button"
            className="col-4 orange"
          >
            ÷
          </button>
        </div>
        <div className="buttons-row-2">
          <button
            onClick={addNumber}
            name="7"
            type="button"
            className="col-1 "
          >
            7
          </button>
          <button
            onClick={addNumber}
            name="8"
            type="button"
            className="col-2 "
          >
            8
          </button>
          <button
            onClick={addNumber}
            name="9"
            type="button"
            className="col-3 "
          >
            9
          </button>
          <button
            onClick={selectOperator}
            name="x"
            type="button"
            className="col-4 orange"
          >
            x
          </button>
        </div>
        <div className="buttons-row-3">
          <button
            onClick={addNumber}
            name="4"
            type="button"
            className="col-1 "
          >
            4
          </button>
          <button
            onClick={addNumber}
            name="5"
            type="button"
            className="col-2 "
          >
            5
          </button>
          <button
            onClick={addNumber}
            name="6"
            type="button"
            className="col-3 "
          >
            6
          </button>
          <button
            onClick={selectOperator}
            name="-"
            type="button"
            className="col-4 orange"
          >
            -
          </button>
        </div>
        <div className="buttons-row-4">
          <button
            onClick={addNumber}
            name="1"
            type="button"
            className="col-1 "
          >
            1
          </button>
          <button
            onClick={addNumber}
            name="2"
            type="button"
            className="col-2 "
          >
            2
          </button>
          <button
            onClick={addNumber}
            name="3"
            type="button"
            className="col-3 "
          >
            3
          </button>
          <button
            onClick={selectOperator}
            name="+"
            type="button"
            className="col-4 orange"
          >
            +
          </button>
        </div>
        <div className="buttons-row-5">
          <button
            onClick={addNumber}
            name="0"
            type="button"
            className="col-1-2 "
          >
            0
          </button>
          <button
            onClick={selectOperator}
            name="."
            type="button"
            className="col-3 "
          >
            .
          </button>
          <button
            onClick={selectOperator}
            name="="
            type="button"
            className="col-4 orange"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
