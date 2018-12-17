var myObj = {
  gift : "pony",
  pet : "kitte",
  bed : "sleigh"
}

function checkObj(checkprop) {
  if (myObj.hasOwnProperty(checkprop) == true){
    return console.log(myObj[checkprop]);

  }else {
    return console.log('Not Found');
  }

}
checkObj('gift')
