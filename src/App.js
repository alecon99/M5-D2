import './App.css';
import React, {Component} from 'react'
import NavigatioBar from './components/navbar/NavigationBar';
import Footer from './components/footer/Footer';
import LatestRelease from './components/main/LatestRelease';
import Welcome from './components/main/Welcome';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
      <NavigatioBar />
      <Welcome />
      <LatestRelease />
      <Footer />
      </>
    )
  }
}

export default App;
