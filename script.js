var showMsg = function(msg1, msg2){
    var msgAll = msg2 + msg1;
    
    return msgAll;
}

var random = function(N, M){
    return Math.floor(Math.random()*(M-N+1)+N) 
}

function launch(){
    d3.select('p').text(random(1911,2016));
}