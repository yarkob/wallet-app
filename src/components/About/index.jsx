import { useContext } from 'react';
import { AppContext } from '../../providers';

const About = () => {
  const currency = useContext(AppContext)

  debugger;

  return (
    <h1>About page</h1>
  )
}

export default About;
