function createBoard()
  {
    //set all the squares back to white
    var w;
    for( w= 0; w<25; w++)
    {
    document.getElementById(w).style.backgroundColor = "rgba(0, 0, 0, 0.654)";
    document.getElementById(w).parentNode.style.backgroundColor = "rgba(0, 0, 0, 0.654)";
    }//end for w


     var wordsEntered = document.getElementById("wordsInBoard").value;

     var boardWords = ["B1", "I1", "N1", "G1", "O1",
     "B2", "I2", "N2", "G2", "O2",
     "B3", "I3", "Free Space", "G3", "O3",
     "B4", "I4", "N4", "G4", "O4",
     "B5", "I5", "N5", "G5", "O5"]
     var wordsEnteredArray = wordsEntered.split(",");

    // pick random ones to put in the final board list
    var i;
     for (i = 0; i < boardWords.length; i++)
     {
       if(i != 12){
         var randomNum = Math.floor((Math.random()*wordsEnteredArray.length)+0);

        boardWords[i] = wordsEnteredArray[randomNum];

      }//end if not 12


       }//end for



     //put the array into the bingo board
     var j;
     for(j = 0; j < 25; j++)
     {

       document.getElementById(j).innerHTML = boardWords[j];

     }
     //document.getElementById("testP").innerHTML = boardWords[0];
     document.getElementById("bingoBoard").hidden = false;



  }//end function create board

  function markOff(spaceID)
  {
    document.getElementById(spaceID).parentNode.style.backgroundColor = "#feda4a";
    document.getElementById(spaceID).style.backgroundColor = "#feda4a";
    document.getElementById(spaceID).style.color = "black";
    
    
  }//end mark off function