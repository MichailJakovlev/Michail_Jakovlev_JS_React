import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import One from './article_one';
import Two from './article_two';
import Three from './article_three';
import Four from './article_four';

class Articles extends Component {
 
    render() {
      
        return (
          
            <div >
             <div className="articles">
                <h2>Статьи</h2>
                <li><NavLink to="/article_one">Первая статья</NavLink></li>
                <li><NavLink to="/article_two">Вторая статья</NavLink></li>
                <li><NavLink to="/article_three">Треться статья</NavLink></li>
                <li><NavLink to="/article_four">Четвертая статья</NavLink></li>      
             </div>
              <div> 
                  <Route path="/article_one" component={One} />
                  <Route path="/article_two" component={Two} />
                  <Route path="/article_three" component={Three} />
                  <Route path="/article_four" component={Four} /></div>
            </div>
         
        );

    }

}

export default Articles;
