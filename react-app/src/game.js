import React, {Component} from 'react';
import './index.css';
class Game extends Component {
      
    render() {
      
        return (
          
            <div className="game">
             <div className="game_text">
              <h2>Откройте ячейку</h2>
             </div>
             <div className="game_place">
              <div>
              <button onClick="isGame()">A1</button>
              <button onClick="isGame()">A2</button>
              <button onClick="isGame()">A3</button>
              <button onClick="isGame()">A4</button>
              <button onClick="isGame()">A5</button>
              </div>
              <div>
              <button onClick="isGame()">B1</button>
              <button onClick="isGame()">B2</button>
              <button onClick="isGame()">B3</button>
              <button onClick="isGame()">B4</button>
              <button onClick="isGame()">B5</button>
              </div>
              <div>
              <button onClick="isGame()">C1</button>
              <button onClick="isGame()">C2</button>
              <button onClick="isGame()">C3</button>
              <button onClick="isGame()">C4</button>
              <button onClick="isGame()">C5</button>
              </div>
              <div>
              <button onClick="isGame()">D1</button>
              <button onClick="isGame()">D2</button>
              <button onClick="isGame()">D3</button>
              <button onClick="isGame()">D4</button>
              <button onClick="isGame()">D5</button>
              </div>
              <div>
              <button onClick="isGame()">E1</button>
              <button onClick="isGame()">E2</button>
              <button onClick="isGame()">E3</button>
              <button onClick="isGame()">E4</button>
              <button onClick="isGame()">E5</button>
              </div>
             </div>
            </div>

        );

    }

}

export default Game;
