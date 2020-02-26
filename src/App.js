import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({people: data, loading: false});
  }

  render() {
    if (this.state.loading) {
      return <div className="center">loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>didn't get a person</div>;
    }

    return (
      <div className="App">
      <h1 className="center">Get API</h1>
      <form className="form">
          {this.state.people.map((person, i) => (
            <div className="line" key={person.id}>
              <h1 id="name">{person.name}</h1>
              <label>Phone:<div type="number" id="phone" className="label" name="phone">{person.phone}</div><br></br></label>
              <label>E-mail:<div type="text" id="email" className="label"  name="email">{person.email}</div><br></br></label>
              <label>City:<div type="text" id="address" className="label"  name="address">{person.address.city}</div><br></br></label>
              <label>Street:<div type="text" id="street" className="label"  name="street">{person.address.street}</div><br></br></label>
              <label>Website:<div type="text" id="city" className="label"  name="city">{person.website}</div><br></br></label>
            </div>
          ))}
      </form>
    </div>
    );
  }
}

