import { useContext } from 'react';

import { AppContext } from '../../providers';

const Settings = () => {
  const {state, dispatch} = useContext(AppContext)

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

            <select name='currency'
                    onChange={onchange}
                    value={state.currency}>
              <option value='UAN'>Гривня</option>
              <option value='USD'>Долар США</option>
              <option value='EUR'>Євро</option>
            </select>
          </label>
        </form>
      </div>
    </>
  )
}

export default Settings;
