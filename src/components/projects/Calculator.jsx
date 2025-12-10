import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import './Calculator.css'

const Calculator = () => {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  const inputNumber = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num))
      setWaitingForNewValue(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.')
      setWaitingForNewValue(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForNewValue(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '*':
        return firstValue * secondValue
      case '/':
        return firstValue / secondValue
      case '=':
        return secondValue
      default:
        return secondValue
    }
  }

  const handleEquals = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }

  return (
    <div className="calculator-page">
      <div className="calculator-container">
        <a href="#/" className="back-button">
          <FaArrowLeft /> Back to Projects
        </a>
        <div className="calculator">
          <div className="calculator-header">
            <h1>Calculator</h1>
          </div>
          <div className="calculator-display">{display}</div>
          <div className="calculator-buttons">
            <button onClick={clear} className="calculator-button function">
              AC
            </button>
            <button onClick={() => setDisplay(String(parseFloat(display) * -1))} className="calculator-button function">
              +/-
            </button>
            <button onClick={() => setDisplay(String(parseFloat(display) / 100))} className="calculator-button function">
              %
            </button>
            <button onClick={() => performOperation('/')} className="calculator-button operator">
              ÷
            </button>

            <button onClick={() => inputNumber(7)} className="calculator-button">
              7
            </button>
            <button onClick={() => inputNumber(8)} className="calculator-button">
              8
            </button>
            <button onClick={() => inputNumber(9)} className="calculator-button">
              9
            </button>
            <button onClick={() => performOperation('*')} className="calculator-button operator">
              ×
            </button>

            <button onClick={() => inputNumber(4)} className="calculator-button">
              4
            </button>
            <button onClick={() => inputNumber(5)} className="calculator-button">
              5
            </button>
            <button onClick={() => inputNumber(6)} className="calculator-button">
              6
            </button>
            <button onClick={() => performOperation('-')} className="calculator-button operator">
              −
            </button>

            <button onClick={() => inputNumber(1)} className="calculator-button">
              1
            </button>
            <button onClick={() => inputNumber(2)} className="calculator-button">
              2
            </button>
            <button onClick={() => inputNumber(3)} className="calculator-button">
              3
            </button>
            <button onClick={() => performOperation('+')} className="calculator-button operator">
              +
            </button>

            <button onClick={() => inputNumber(0)} className="calculator-button zero">
              0
            </button>
            <button onClick={inputDecimal} className="calculator-button">
              .
            </button>
            <button onClick={handleEquals} className="calculator-button operator equals">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator

