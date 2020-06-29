const assertEqual = require("../assertEqual");
const tail = require("../tail");

//Test Cases
assertEqual(["Yo Yo", "Lighthouse", "Labs"].length, 3);
assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
assertEqual(tail([]).length, 0);
assertEqual(tail(["Test"]).length, 0);
