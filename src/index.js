import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	
	state = {lat: null, errorMessage: '' };
	
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
				position => this.setState({lat : position.coords.latitude}) ,err => this.setState({errorMessage: err.message})
		);
	}

	renderContent() {
		if(this.state.errorMessage && !this.state.lat) {
			return <div>Error Message : {this.state.errorMessage}</div>;
		}  
		if(!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		} 
		return <Spinner message="Please allow to access your location"/>;
		
	}
	
	render() {
		return (
				<div className="border red"> {this.renderContent()} </div>
		);
	}
	
	componentDidUpdate() {
		console.log("My component was just updated");
	} 

}


ReactDOM.render(<App />, document.getElementById('root'));