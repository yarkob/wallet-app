import { useContext } from 'react';

import { AppContext } from '../../providers';

const Setting = () => {
  const {state, dispatch} = useContext(AppContext);

  const onChange = (e) => {
    const {value} = e.target;

    dispatch({
      type: 'changeCurrency',
      currency: value
    })
  }

  return (
    <>
      <h1>Налаштування</h1>

      <div>
        <form>
          <label>
            Валюта:
            <select name="currency"
                    onChange={onChange}
                    value={state.currency}>
              <option value="UAH">Гривня</option>
              <option value="USD">Долар США</option>
              <option value="EUR">Євро</option>
            </select>
          </label>
        </form>
      </div>
      </>
      )
}

export default Setting;
