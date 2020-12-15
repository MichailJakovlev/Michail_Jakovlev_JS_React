import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Home from './home';
import Game from './game';
import Tests from './tests';
import Articles from './articles';
import One from './article_one';
import Two from './article_two';
import Three from './article_three';
import Four from './article_four';
import './index.css';


class Main extends Component {
    render() {
        return (
        <HashRouter>
    <div> 
     <h1>React</h1>
     <div className="flex">
     <div className="article-menu">
       <h2>Статьи</h2>
       <li><NavLink to="/article_one">Первая</NavLink></li>
       <li><NavLink to="/article_two">Вторая</NavLink></li>
       <li><NavLink to="/article_three">Третья</NavLink></li>
       <li><NavLink to="/article_four">Четвертая    </NavLink></li>      
     </div>
     <ul className="head">
       <li><NavLink to="/home">Главная</NavLink></li>
       <li><NavLink to="/articles">Статьи</NavLink></li>
       <li><NavLink to="/tests">Тесты</NavLink></li>
       <li><NavLink to="/game">Игра</NavLink></li>
     </ul>
      
      <div className="content">
        <Route path="/home" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="/tests" component={Tests} />
        <Route path="/game" component={Game} />
        <Route path="/article_one" component={One} />
        <Route path="/article_two" component={Two} />
        <Route path="/article_three" component={Three} />
        <Route path="/article_four" component={Four} />
      </div>
      </div>
    </div>
        </HashRouter>
       
        );
    }
}

export default Main;