import { useContext } from 'react';
import CurrencyContext from '../../providers';

const About = () => {
  const currency = useContext(CurrencyContext)

  debugger;

  return (
    <h1>About page</h1>
  )
}

export default About;
