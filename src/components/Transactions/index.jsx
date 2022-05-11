import PropTypes from 'prop-types';
import Transaction from '../Transaction';

const Transactions = ({ transactions = [], onDelete, onStartClick }) => {
  return transactions.map((transaction) => <Transaction key={transaction.id}
  transaction={transaction}
  onDelete={onDelete}
  onStarClick={onStartClick}
  />) }

Transactions.PropTypes = {
  transactions: PropTypes.array
}

Transactions.defaultProps = {
  transactions: []
}

export default Transactions;
