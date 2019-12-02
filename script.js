
function getMoney(){

var getUserEnterMoney = parseInt(document.getElementById("withdrawRequest").value);
var balance = 0;
var typeOfCurr = [2000,500,200,100,50,20,10,5,2,1];
var totalMoney = {};
var notes = 0;
var noteSum = 0;
for(var counter = 0; counter < typeOfCurr.length; counter++){
    if(getUserEnterMoney && getUserEnterMoney % typeOfCurr[counter] == 0){
        notes = getUserEnterMoney / typeOfCurr[counter];
        noteSum = noteSum + notes;
    }
    else{
        balance = getUserEnterMoney % typeOfCurr[counter];
        notes = (getUserEnterMoney - balance) / typeOfCurr[counter];
        noteSum = noteSum + notes;
    }

    totalMoney[typeOfCurr[counter]] = notes;
    getUserEnterMoney = balance;
}
var html ="";
var newArray = typeOfCurr.reverse();

for( var  i =0 ; i <  newArray.length; i++){

    if(i % 2 == 0){
        html +="<tr><td>"+ totalMoney[newArray[i]]+ " notes of RS " + typeOfCurr[i]+"</td>";
    }else{
        html +="<td>"+ totalMoney[newArray[i]]+ " notes of RS " + typeOfCurr[i]+"</td>";
        html +="</tr>";
    }
}


/*for(var rows = 0; rows < typeOfCurr.length/2; rows++){
    counter = 0;
    html +="<tr>";
    for(var i = typeOfCurr.length; i >= 0; i--){
        if(totalMoney[typeOfCurr[i]] !== undefined && totalMoney[typeOfCurr[i]] !== null){
        html+="<td>"+totalMoney[typeOfCurr[i]]+ " Notes of Rs"+ typeOfCurr[i]+"</td>"; 
        }
    }
    html +="</tr>";
}*/
html+="<tr><td colspan='2'>Total note dispesnsed "+ noteSum +"</td></tr>";
document.getElementById("tableWithdraw").innerHTML = html;

}
