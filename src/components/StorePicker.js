import React from 'react'
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.func
  }

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.current.value;    
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <>
        <h1>FISH HERE!</h1>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter  a Store</h2>
          <input 
            type="text"
            ref={this.myInput}
            required
            placeholder="Store name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit store</button>
        </form>
      </>
    )
  }
}

export default StorePicker;
