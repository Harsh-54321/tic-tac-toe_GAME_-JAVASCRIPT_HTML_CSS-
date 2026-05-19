let play_ture0 = true;
let player_status = document.querySelector(".player_status > span");
let reset = document.querySelector(".reset");

const win_peturn = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const box = document.querySelectorAll(".map-wrap > li");

box.forEach((box_li) => {
  box_li.addEventListener("click", () => {
    if (play_ture0) {
      play_ture0 = false;
      box_li.innerText = "o";
      player_status.innerText = "2";
    } else {
      box_li.innerText = "x";
      play_ture0 = true;
      player_status.innerText = "1";
    }
    box_li.classList.add("disabled");
    findmatch();
  });
});

reset.addEventListener("click", () => {
  box.forEach((box_li) => {
    box_li.classList.remove("disabled");
    box_li.innerText = "";
    player_status.innerText = "1";
  });
});

const findmatch = () => {
  for (pattern of win_peturn) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(box[pattern[0]].innerText, box[pattern[1]].innerText, box[pattern[2]].innerText);

    if (
      box[pattern[0]].innerText != "" &&
      box[pattern[1]].innerText != "" &&
      box[pattern[2]].innerText != ""
    ) {
      if (
        box[pattern[0]].innerText === box[pattern[1]].innerText &&
        box[pattern[1]].innerText === box[pattern[2]].innerText
      ) {
        if (box[pattern[0]].innerText === "o") {
          player_status.innerText = "PLAYER 1 is WINNER";
        } else {
          player_status.innerText = "PLAYER 2 is WINNER";
        }
        
      }
    }
    // if(box[pattern[0]].innerText === "o" && box[pattern[1]].innerText === "o", box[pattern[2]].innerText === "o") {
    //         player_status.innerText = "PLAYER 1 IS A WINNER"
    // }
    // else if(box[pattern[0]].innerText === "x" && box[pattern[1]].innerText === "x", box[pattern[2]].innerText === "x") {
    //             player_status.innerText = "PLAYER 2 IS A WINNER"
    // }
  }
};

