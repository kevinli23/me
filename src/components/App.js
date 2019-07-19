import React from 'react';
import '../css/App.css';
import Navbar from './Navbar';
import Body from './Body';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}));

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
