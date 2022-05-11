import PropTypes from 'prop-types';
import { useCallback, useContext } from 'react';

import { AppContext } from '../../providers';
import { Wrapper, TransactionDate, Value, Comment, Icon } from './style';
import Star from '../../assets/img/star.svg';
import StarField from '../../assets/img/star_filed.svg';

const Transaction = ({ transaction: {value, date, comment, id, isStarred}, onDelete, onStarClick }) => {
  const {state} = useContext(AppContext);

  const deleteItem = useCallback(() => onDelete(id), [id]);

  return (
    <Wrapper value={value}>
      <Icon onClick={() => onStarClick(id)}>
        <img src={isStarred ? StarField : Star}/>
      </Icon>
      <TransactionDate>{date}</TransactionDate>
      <Value>{`${value.toFixed (2)} ${state.currency}`}</Value>
      <Comment>{comment}</Comment>
      <button onClick={deleteItem}>Delete</button>
    </Wrapper>
  )
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number
  }),
  onStarClick: PropTypes.func
}

Transaction.defaultProps = {
  transaction: {
    label: '',
    value: 0,
  }
}

export default Transaction;
