import React, { Component } from "react";
import './index.css';

class Articles extends Component {

	constructor(props) {
		super(props);
		this.state = {
			urls: [],
			isLoading: true,
			isJson: false
		};
	}

	sendRequest(url){
		return fetch(url, { method: "GET", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', }, }).then((response) => { 
			const contentType = response.headers.get("content-type"); 
				if (contentType && contentType.indexOf("application/json") !== -1) {
					this.setState({ isJson: true });
					return response.json() 
				} else { 
					return response.text() 
				}
			});
	}
	
	componentDidMount() {
		const fetchUrls = async () => {
			await this.sendRequest('http://wordpress/wp-json/wp/v2/posts/').then(response => {
				let array = [];
				if(this.state.isJson && response instanceof Array && response.length > 0){
					for(var i = 0; i < response.length; i++){
						var url = [response[i].title.rendered, "/#/ArticlesComponent/" + response[i].id]
						array.push(url);
					}
				}
				this.setState({ urls: array });
				this.setState({ isLoading: false });
			})
		};
		fetchUrls();
	}
	
	render() {
		return (
			<div className="articles__link">
				{this.state.urls.length > 0 ? this.state.urls.map((result, i) => ( <a key={i} href={result[1]}>{result[0]}</a> )) : this.state.isLoading ? <p>Загрузка новостей...</p> : <p>Новостей нет.</p>}
			</div>
		);
	}
}

export default Articles;