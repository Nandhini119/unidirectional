import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import superagent from 'superagent';
import Paper from 'material-ui/Paper';
import './../App.css';


export default class CartoonsDirectory extends React.Component {
    
  constructor() {
    super();
     
    this.state = {
      cartoons: []
    }
  }
  componentDidMount() {
     this.fnget();
  }

fnget()
{
    console.log("get");
    superagent
      .get('http://eclipseche2.niit-mts.com:33963/cartoons')
      .end((err,res) => {          
        this.setState({cartoons: res.body});
      });  
  
  }
 fndelete(cartoon){   
     superagent
     .del('http://eclipseche2.niit-mts.com:33963/cartoons/'+cartoon.target.value)
     
     .end((err,res)=>{
         if(err)
         {
             console.log("error");
         }
         else
         {
             console.log("deleted");
             window.location.replace("http://eclipseche2.niit-mts.com:33964/");
         }

     });
          }
          fndetails(cartoon){
              window.open('https://en.wikipedia.org/wiki/'+cartoon.name);
          }
  render() {
    const tbody = this.state.cartoons.map(cartoon => {
      return (<paper>
        <tr>
          <td>{cartoon.id} 
          </td>
          <td>{cartoon.name}</td>
          <td>{cartoon.creator}</td>
          <td><button className="btn btn-warning" onClick={this.fndelete} value={cartoon.id}>Delete</button></td>
          <td><button className="btn btn-warning" onClick={this.fndetails} value={cartoon.name}>More Details</button></td>
        </tr></paper>
      );
    });

    return (
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading">Cartoons Directory <button>Add Cartoon</button></div>
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
