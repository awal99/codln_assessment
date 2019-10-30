import React from "react";
import { getUserInfo} from "../modules/data.module";
import Board from "../utils/Board";
import Player from "../utils/Player";
import "../assets/styles/board.css";


const New=(props)=>{

    function hasClass(el, className) {
        if (el.classList)
          return el.classList.contains(className);
        else
          return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
      }
      function addClass(el, className) {
        if (el.classList)
          el.classList.add(className);
        else if (!hasClass(el, className)) el.className += " " + className;
      }
      function removeClass(el, className) {
        if (el.classList)
          el.classList.remove(className);
        else if (hasClass(el, className)) {
          var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
          el.className=el.className.replace(reg, ' ');
        }
      }
      
      function drawWinningLine({ direction, row }) {
        let board = document.getElementById("board");
        board.className = `${direction}${row}`;
        setTimeout(() => { board.className += ' full'; }, 50);
    }
    
    
    //Starts a new game with a certain depth and a starting_player of 1 if human is going to start
    function newGame(depth = -1, starting_player = 1) {
        //Instantiating a new player and an empty board
        let p = new Player(parseInt(depth));
        let b = new Board(['','','','','','','','','']);
    
        //Clearing all #Board classes and populating cells HTML
        let board = document.getElementById("board");
        board.className = '';
        board.innerHTML = '<div class="cell-0"></div><div class="cell-1"></div><div class="cell-2"></div><div class="cell-3"></div><div class="cell-4"></div><div class="cell-5"></div><div class="cell-6"></div><div class="cell-7"></div><div class="cell-8"></div>';
        
        //Clearing all celebrations classes
        // removeClass(document.getElementById("charachters"), 'celebrate_human');
        // removeClass(document.getElementById("charachters"), 'celebrate_robot');
    
        //Storing HTML cells in an array
        let html_cells = [...board.children];
    
        //Initializing some variables for internal use
        let starting = parseInt(starting_player),
            maximizing = starting,
            player_turn = starting;
    
        //If computer is going to start, choose a random cell as long as it is the center or a corner
        if(!starting) {
            let center_and_corners = [0,2,4,6,8];
            let first_choice = center_and_corners[Math.floor(Math.random()*center_and_corners.length)];
            let symbol = !maximizing ? 'x' : 'o';
            b.insert(symbol, first_choice);
            addClass(html_cells[first_choice], symbol);
            player_turn = 1; //Switch turns
            document.getElementsByClassName("xturn")[0].innerHTML="";
            document.getElementsByClassName("oturn")[0].innerHTML="its your turn";
        }
    
        //Adding Click event listener for each cell
          b.state.forEach((cell, index) => {
              html_cells[index].addEventListener('click', () => {
                  //If cell is already occupied or the board is in a terminal state or it's not humans turn, return false
                  if(hasClass(html_cells[index], 'x') || hasClass(html_cells[index], 'o') || b.isTerminal() || !player_turn) return false;
    
                  let symbol = maximizing ? 'x' : 'o'; //Maximizing player is always 'x'
    
                  //Update the Board class instance as well as the Board UI
                  b.insert(symbol, index);
                  addClass(html_cells[index], symbol);
    
                  //If it's a terminal move and it's not a draw, then human won
                  if(b.isTerminal()) {
                      let { winner } = b.isTerminal();
                      if(winner !== 'draw')  alert("X player wins");
                      //addClass(document.getElementById("charachters"), 'celebrate_human');
                      drawWinningLine(b.isTerminal());
                  }
                  player_turn = 0; //Switch turns
                  document.getElementsByClassName("oturn")[0].innerHTML="";
                  document.getElementsByClassName("xturn")[0].innerHTML="its your turn";
    
                  //Get computer's best move and update the UI
                  p.getBestMove(b, !maximizing, best => {
                      let symbol = !maximizing ? 'x' : 'o';
                      b.insert(symbol, best);
                      addClass(html_cells[best], symbol);
                      if(b.isTerminal()) {
                          let { winner } = b.isTerminal();
                         if(winner !== 'draw') alert("O player wins");
                         //addClass(document.getElementById("charachters"), 'celebrate_robot');
                          drawWinningLine(b.isTerminal());
                      }
                      player_turn = 1; //Switch turns
                      document.getElementsByClassName("xturn")[0].innerHTML="";
                      document.getElementsByClassName("oturn")[0].innerHTML="its your turn";

                  });
              }, false);
              if(cell) addClass(html_cells[index], cell);
          });
    }

    document.addEventListener("DOMContentLoaded", event => { 

        //Start a new game when page loads with default values
        let depth = -1;
        let starting_player = 1;
        newGame(depth, starting_player);
    
    });

    const [userInfo,setUserInfo] = React.useState(null)
    React.useEffect(()=>{
        getUserInfo(function(data){
            setUserInfo(data);
        })
        
    },[])
    
    return(
        <div >
        <div className="sm-left">
            <div className={props.color==="yellow"?"title2":"title"}>X & Os</div>
            <img src={userInfo != null ? userInfo.picture.data.url:'loading ...'} alt="loading user pic" width="120px" height="120px" style={{borderRadius:"50%"}} />
            <div className="userinfo">
            <div className={props.color==="yellow"?"name":"name2"}>Me: X</div>
            <div className={props.color==="yellow"?"points xturn":"points2 xturn"}>it is your turn</div>
            </div>
        </div>
        <div className="center">
           <div id="board"></div>
        </div>
        <div className="sm-right">
            <img src={userInfo != null ? userInfo.picture.data.url:'loading ...'} alt="loading user pic" width="120px" height="120px" style={{borderRadius:"50%",marginTop:70}} />
            <div className="userinfo">
            <div className={props.color==="yellow"?"name":"name2"}>Jane: O</div>
            <div className={props.color==="yellow"?"points oturn":"points2 oturn"}></div>
            </div>
        </div>
    </div>
    )
}

export default New;