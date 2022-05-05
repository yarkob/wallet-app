import React from 'react';
import Transaction from '../Transaction';

const Transactions = ({ transactions }) => {
  return (
    <div>
      {transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction}/>
      ))}
    </div>
  );
};

export default Transactions;
