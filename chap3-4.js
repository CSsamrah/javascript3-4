//Practice exercise 3.1
shoppingList=["Milk","bread",'Apples'];
console.log("the lengh of shopping list array is",shoppingList.length);
shoppingList[1]="bananas";
console.log(shoppingList);

//Practice exercise 3.2
let newShoppingList=[];
newShoppingList.splice(0,0,"Milk","Bread","Apples");
console.log(newShoppingList);
newShoppingList.splice(1,1,"Bananas","Eggs");
console.log(newShoppingList);
newShoppingList.pop();
console.log(newShoppingList);
newShoppingList.sort();
let findValue=newShoppingList.find(e => e==="Milk");
console.log(findValue);
let findIndex=newShoppingList.indexOf("Milk");
console.log(findIndex);
newShoppingList.splice(1,0,"Carrots","Lettuce");
console.log(newShoppingList);
let beverages=["juice","pop"];
let newList=newShoppingList.concat(beverages);
newList=newList.concat(beverages);
console.log(newList);
console.log(newList.lastIndexOf("pop"));

//Practice exercise 3.3
let numberArray=[1,2,3];
let newArrays=[numberArray,numberArray,numberArray];
console.log(newArrays[1][1]);
//Practice exercise 3.4
let myCar={
    make:"suzuki",
    model:"cultus",
    tyre:4,
    engine:1000,
    forSale:false,
    color:"white",
}
let variable='color';
myCar[variable]="black"
variable='forSale';
myCar[variable]=true;
console.log(myCar['make']);
console.log(myCar.model);
console.log(myCar.forSale);
//Practice exercise 3.5
let friend1={
    friendName:"eman",
    lastName:"saleem",
    idValue:5678,
}
let friend2={
    friendName:"samrah",
    lastName:"fatima",
    idValue:1234,
}
let friend3={
    friendName:"areeba",
    lastName:"fatima",
    idValue:9101,
}
let people={
    friends:[friend1,friend2,friend3],
}
console.log(people);
//Chapter Projects
//Manipulating an array
const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
theList.pop();
theList.shift();
console.log(theList);
theList.unshift("FIRST");
console.log(theList);
theList.splice(3,1,"hello world");
console.log(theList);
theList.splice(2,1,"MIDDLE");
console.log(theList);
theList.splice(4,4,"LAST");
console.log(theList);

//Company product catalog
let storeItems=[];
let pasta={
    name:"kolson",
    model:"none",
    cost:600,
    quantity:"300gm",

}
let toothpaste={
    name:"colgate",
    model:"none",
    cost:600,
    quantity:"300 ml",

}
let cream={
    name:"vaseline",
    model:"none",
    cost:300,
    quantity:"100ml",

}
storeItems=[pasta,toothpaste,cream];
console.log(storeItems);
console.log(storeItems[2].quantity);
console.log(storeItems[0].name);
console.log(storeItems[1].cost);

//CHAPTER 4
//Exercise 4.1
let checkBoolean=true;
console.log(checkBoolean);
if(checkBoolean){
    console.log("The boolean is true");
}
else{
    console.log("The boolean is false");
}
if(!checkBoolean){
    console.log("The boolean is false");
}
else{
    console.log("The boolean is true");
}
//Exercise 4.2
let usersAge= Number(prompt("Enter your age"));
let message;
if(usersAge>=21){
    message="The user is allowed to enter the venue and to purchase the alcohol";
}else if(usersAge>=19){
    message="The user is allowed to enter the venue but not to purchase the alcohol ";
}else{
    message="The entry is denied";
}
console.log(message);
//Exercise 4.3
let idVariable=prompt("enter your age");
idVariable>18?console.log("Allowed"):console.log("Denied");
//Exercise 4.4
let randomNumber=Number(Math.floor(Math.random()*6));
 console.log(randomNumber);
let answer;
let randomInput=prompt("enter any string value");
switch(randomNumber){
    case 0:
        answer="you have come a long way";
        break;
    case 1:
        answer="everyone is so proud of you";
        break;
    case 2:
        answer="You did well";
        break;
    case 3:
        answer="you are on the right path";
        break;
    case 4:
        answer="Allah has better plans for you";
        break;
    case 5:
        answer="everything will be okay";
        break;
    default:
        answer="Best of Luck";
        break;
}
console.log(randomInput);
console.log(answer);
//Exercise 4.5
let prize=Number(prompt("Select a value between 0 to 10"));
let outputMessage="My Selection:";
switch(prize){
    case 0:
    case 1:
    outputMessage+="Shoes";
    break;
    case 2:
    case 3:
    outputMessage+="Bags";
    break;
    case 4:
    case 5:
    outputMessage+="Car Accessories";
    break;
    case 6:
    case 7:
    outputMessage+="Pets accessories";
    break;
    case 8:
    case 9:
    outputMessage+="Sports Bikes";
    break;
    default:
    outputMessage+="Sorry,try again";
    break;
}
console.log(outputMessage);
//Chapter Projects
//Evaluating a number game
let numberGame= Number(prompt("Enter a number"));
let output;
if(numberGame>100){
    output="The value is greater";
}else if(numberGame<100){
    output="The value is less";
}else{
    output="The value is equal";
}
console.log(output);
//Friend checker game
let friendsName=prompt("Enter your friend name");
switch(friendsName){
    case "hashir":
        console.log("yes he is my friend");
        break;
    case "areesha":
        console.log("yes she is my friend");
        break;
    default:
        console.log("Don't know the person");
        break;
}
//Rock Paper Scissors game
let myArr=["Rock","Paper","Scissors"];
let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);
let messageConsole = "player " + myArr[player] + " vs computer " +
myArr[computer] + " ";
if (player === computer) {
messageConsole += "it's a tie";
} else if (player > computer) {
if (computer == 0 && player == 2) {
    messageConsole += "Computer Wins";
} else {
    messageConsole += "Player Wins";
}
} else {
if (computer == 2 && player == 0) {
    messageConsole += "Player Wins";
} else {
    messageConsole += "Computer Wins";
}
}
console.log(messageConsole);



