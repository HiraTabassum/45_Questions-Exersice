/*
Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/
let mypizza = ["cheeze blast", "malai tikka", "fajita"];
// print only names of pizza
for (var i = 0; i < mypizza.length; i++) {
    console.log(mypizza[i]);
}


 // printing names and sentences/message
for (let i = 0; i < mypizza.length; i++){
    console.log(`I like to eat ${mypizza[i]}`);
}
console.log(`\nI really like to eat pizzas. pizza comes in a variety of flavors and toopings, allowing individuals to customize it to their liking`);