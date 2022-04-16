import PropTypes from 'prop-types';
import { Wrapper } from './style';

const Transaction = ({ transaction: { value, label } }) => (
  <Wrapper value={value}>
     Label: {label}
     <p>Value: {value}</p>
   </Wrapper>
)

Transaction.defaultProps = {
  transaction: {
    label: '',
    value: 0,
  }
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number
  })
}

export default Transaction;
