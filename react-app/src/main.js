import React, { Component } from "react";
import './index.css';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Articles from "./articles";
import Tests from "./tests";
import Game from "./game";
import Article from "./article";

class Main extends Component {
	render() {
    return (
	<HashRouter>
        <div className="main">
			
			<div className="head">
				<a><NavLink to="/articles">Статьи</NavLink></a>
				<a><NavLink to="/tests">Тесты</NavLink></a>
				<a><NavLink to="/game">Игра</NavLink></a>
			</div>
			<div className="content">
				 <Route path="/articles" component={Articles}/>
				 <Route path="/tests" component={Tests}/>
				 <Route path="/game" component={Game}/>
				 <Route path="/articlecomponent/:id" component={Article}/>
			</div>
			
        </div>
	</HashRouter>
    );
  }
}

export default Main;