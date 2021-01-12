import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Header, Icon, List } from 'semantic-ui-react'

class App extends Component {

  state = {
    values: []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
      .then((response)=>{
        console.log(response)
        this.setState({
          values: response.data
        })
      })
    // this.setState({
    //   values : [{id: 1, Name : "Value 101"}, {id:2 , Name: "Value 102"}]
    // })
  }
  render(){
    return (
      <div>
        <Header as='h2'>
          <Icon name= "users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value : any)=>(
              <List.Item key={value.id}>{value.name}</List.Item>
            ))}
          {/* <List.Item>Apples</List.Item> */}
        </List>
          {/* <ul>
            {this.state.values.map((value : any)=>(
              <li key={value.id}>{value.name}</li>
            ))}
          </ul> */}
          {/* <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
      </div>
    );
  }
}

export default App;
