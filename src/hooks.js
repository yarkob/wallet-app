import { useState, useEffect, useCallback } from 'react';

import { STATUSES } from './constants';
import { getItems, addItem } from './utils/indexdb';

export const useBooleanToggle = (initialStatus = false) => {
  const [status, setStatus] = useState(false);

  const handleStatusChange = () => {
    console.log('switch')
    setStatus((currentStatus) => !currentStatus)
  };

  return {
    status,
    handleStatusChange
  }
}

export const useData = () => {
  const [state, setState] = useState({
    transactions: [],
    error: '',
    status: STATUSES.IDLE
  })

  useEffect(() => {
    getItems ().then (transactions => {
      setState ({
        ...state,
        transactions,
        status: STATUSES.SUCCESS
      })
    }).catch ((e) => {
      setState ({
        ...state,
        transactions: [],
        status: STATUSES.ERROR,
        error: e
      })
    })
  }, [])

    const pushTransaction = useCallback((data) => {
      const transaction = {
        ...data,
        value: +data.value,
        id: Date.now()
      }

      setState((state) => ({
        ...state,
        transactions: [transaction, ...state.transactions]
      }));

      addItem(transaction)
    }, [setState]);

    const onDelete = useCallback((id) => {
      setState((state) => ({
        ...state,
        transaction: state.transactions.filter ((item) => item.id !== id)
      }))
    }, [setState])

    const onStartClick = useCallback((id) => {
      setState((state) => ({
        ...state,
        transaction: state.transactions.map((item) => item.id !== id ? item : {
          ...item,
          isStarred: !item.isStarred
        })
      }))
    }, [])

  return {
    ...state,
    pushTransaction,
    onDelete,
    onStartClick
    }
}
