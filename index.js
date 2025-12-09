import cowsay from "cowsay";
import Article from "./Article.mjs";
import {mult, sum} from "./maths.mjs"

console.log(cowsay.say({text: 'qwerty'}));


console.log('hi from node!');

const num1 = 5;
const num2 = 8;

console.log(sum(num1, num2));
console.log(mult(4,9));

const newArticle = new Article('Content for article!');
console.log(newArticle.render());


