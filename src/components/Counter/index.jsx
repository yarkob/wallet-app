import {useState, useEffect} from 'react';


const Counter = () => {
  const [clicks, setClicks] = useState(0)
    const [step, setStep] = useState(1)

  const showValue = () => {
    setTimeout(() => {
      alert(clicks)
    }, 3000)
  }

  useEffect(() => {
    console.log('render: ', clicks, step);
    document.title = `Component rendered. Clicked ${clicks} times`;

    setStep((prevValue) => prevValue + 1)
  }, [clicks, setStep]);

  useEffect(() => {
    console.log('Step: ', step)
  }, [step])

  return (
    <div>
      <div>Clicked: {clicks}</div>
      <button onClick={() => setClicks(clicks + step)}>Click</button>
      <bt/>
      <button onClick={showValue}>Show value</button>
      <br/>
      <input name="step" value={step} onChange={(e) => setStep(+e.target.value)}/>
    </div>
  )
};

export default Counter;
