import React from 'react';
import Loader from './Loader.jsx';

class LoaderPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: true,
			loadingText: 'Hello world'
		};

		this.changeLoadingText = this.changeLoadingText.bind(this);
		this.toggleLoaderState = this.toggleLoaderState.bind(this);
	}

	toggleLoaderState () {
		this.setState({
			isActive: !this.state.isActive
		});
	}

	changeLoadingText () {
		this.setState({
			loadingText: this.refs.message.value
		})
	}

	render () {
		return (
			<div className="jumbotron">
				<h4>This is loader page</h4>
				<input value={this.state.loadingText} type="text" onChange={this.changeLoadingText} ref="message" />
				<input value="Toggle Loader" type="button" onClick={this.toggleLoaderState} />
				<Loader isActive={this.state.isActive} loadingText={this.state.loadingText} ></Loader>
			</div>
		);
	}
}

export default LoaderPage;