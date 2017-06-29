import React from 'react';
import superagent from 'superagent';

export default class CartoonsDirectory extends React.Component {
  constructor() {
    super();
    this.state = {
      cartoons: []
    }
  }

  componentDidMount() {
    superagent
      .get('http://localhost:3001/cartoons')
      .end((err, res) => {
        this.setState({cartoons: res.body});
      });
  }

  render() {
    const tbody = this.state.cartoons.map(cartoon => {
      return (
        <tr>
          <td><input value={cartoon.id} /></td>
          <td>{cartoon.name}</td>
          <td>{cartoon.creator}</td>
          <td><button className="btn btn-warning">Delete</button></td>
        </tr>
      );
    });

    return (
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading">Cartoons Directory</div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Creator</th>
              </tr>
            </thead>
            <tbody>
              {tbody}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
