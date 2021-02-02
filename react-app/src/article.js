import React, { Component } from "react";
import './index.css';

class Article extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			created: "",
			content: "",
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
		var id = this.props.match.params.id;
		const fetchUrls = async () => {
			await this.sendRequest('http://wordpress/wp-json/wp/v2/posts/' + id).then(response => {
				if(this.state.isJson){
					this.setState({ created: response.date });
					this.setState({ title: response.title.rendered });
					this.setState({ content: response.content.rendered });
				}
			})
		};
		fetchUrls();
	}
	render() {
		return (
			<div className="article">
				<div className="article_header">
					<div className="article_title">
						{ this.state.title == "" ? <span>Загрузка названия...</span> : <span>{ this.state.title }</span> }
					</div>
					<div className="article_date">
						{ this.state.created == "" ? <span>Загрузка даты...</span> : <span className="created">{this.state.created}</span> }
					</div>
				</div>
				{ this.state.content == "" ? <div className="article_content"><span>Загрузка контента...</span></div> : <div className="article_content" dangerouslySetInnerHTML={{__html: this.state.content}}></div> }
				<div className="article_footer">
					<button onClick={event =>  window.location.href='/#/Articles'}>Вернуться</button>
				</div>
			</div>
		);
	}
}

export default Article;