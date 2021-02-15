import React, {Component} from 'react';
import './index.css';

class Game extends Component {
      
    constructor(props) {
        super(props);
          this.numberAttempts = 100;
        this.boxClass = [
           "","","","","","","","","","","","","","","","","","","","","","","","", "",
        ];
      }

      handleClick = (e) => {
         let text = document.getElementById("text");
         let attempts = document.getElementById("attempts");
         text.innerHTML = "Открытие " + e.target.innerHTML;
         let keyId = e.target.dataset.id;
         let randomNamber = Math.round((Math.random() * 100));
         if (this.numberAttempts === 0){
            text.innerHTML = "Поражение";
            return false;
         }

        setTimeout(() => {
         if(randomNamber >= 66){
            text.innerHTML = "Вы получите случайный подарок";
         }
         if(randomNamber >= 33 && randomNamber<= 66){
            text.innerHTML = "Попробуйте еще раз";
         }
         if(randomNamber <= 33){
            text.innerHTML = "Ход был не удачен";
         }
         attempts.innerHTML = "Попытки: " + this.numberAttempts;
      }, 500);
      
      if(randomNamber >= 66){
         this.boxClass[keyId] = "W";
         this.numberAttempts--;
      }
      if(randomNamber >= 33 && randomNamber<= 66){
         this.numberAttempts--;
         this.boxClass[keyId] = "=";
      }
      if(randomNamber <= 33){
         this.numberAttempts--;
         this.boxClass[keyId] = "L";
      }
      console.log(this.boxClass[keyId]);
      console.log(keyId);
   }

    render() {
      
        return (
          
            <div className="game">
             <div className="game_text">
             <h2>Игра</h2>
            <p id="text">выберите</p>
            <p id="attempts">Попытки: {this.numberAttempts}</p>
             </div>
             <div className="game_place">
              <div>
              <button  data-id="0" className={"game_button" + this.boxClass[0]} onClick={this.handleClick}>A1</button>
              <button  data-id="1" className={"game_button" + this.boxClass[1]} onClick={this.handleClick}>A2</button>
              <button  data-id="2" className={"game_button" + this.boxClass[2]} onClick={this.handleClick}>A3</button>
              <button  data-id="3" className={"game_button" + this.boxClass[3]} onClick={this.handleClick}>A4</button>
              <button  data-id="4" className={"game_button" + this.boxClass[4]} onClick={this.handleClick}>A5</button>
              </div>
              <div>
              <button data-id="5" className={"game_button" + this.boxClass[5]} onClick={this.handleClick}>B1</button>
              <button data-id="6" className={"game_button" + this.boxClass[6]} onClick={this.handleClick}>B2</button>
              <button data-id="7" className={"game_button" + this.boxClass[7]} onClick={this.handleClick}>B3</button>
              <button data-id="8" className={"game_button" + this.boxClass[8]} onClick={this.handleClick}>B4</button>
              <button data-id="9" className={"game_button" + this.boxClass[9]} onClick={this.handleClick}>B5</button>
              </div>
              <div>
              <button data-id="10" className={"game_button" + this.boxClass[10]} onClick={this.handleClick}>C1</button>
              <button data-id="11" className={"game_button" + this.boxClass[11]} onClick={this.handleClick}>C2</button>
              <button data-id="12" className={"game_button" + this.boxClass[12]} onClick={this.handleClick}>C3</button>
              <button data-id="13" className={"game_button" + this.boxClass[13]} onClick={this.handleClick}>C4</button>
              <button data-id="14" className={"game_button" + this.boxClass[14]} onClick={this.handleClick}>C5</button>
              </div>
              <div>
              <button data-id="15" className={"game_button" + this.boxClass[15]} onClick={this.handleClick}>D1</button>
              <button data-id="16" className={"game_button" + this.boxClass[16]} onClick={this.handleClick}>D2</button>
              <button data-id="17" className={"game_button" + this.boxClass[17]} onClick={this.handleClick}>D3</button>
              <button data-id="18" className={"game_button" + this.boxClass[18]} onClick={this.handleClick}>D4</button>
              <button data-id="19" className={"game_button" + this.boxClass[19]} onClick={this.handleClick}>D5</button>
              </div>
              <div>
              <button data-id="20" className={"game_button" + this.boxClass[20]} onClick={this.handleClick}>E1</button>
              <button data-id="21" className={"game_button" + this.boxClass[21]} onClick={this.handleClick}>E2</button>
              <button data-id="22" className={"game_button" + this.boxClass[22]} onClick={this.handleClick}>E3</button>
              <button data-id="23" className={"game_button" + this.boxClass[23]} onClick={this.handleClick}>E4</button>
              <button data-id="24" className={"game_button" + this.boxClass[24]} onClick={this.handleClick}>E5</button>
              </div>
             </div>
            </div>

        );

    }

}

export default Game;
