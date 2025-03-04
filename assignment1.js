let str = "Gaming is super fun!";
console.log("Original String:", str);

console.log("Length of string:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring (0-6):", str.substring(0, 6));
console.log("Slice (7-14):", str.slice(7, 14)); 
console.log("Replace 'super fun' with 'awesome':", str.replace("super fun", "awesome"));
console.log("Split string by space:", str.split(" "));
console.log("Includes 'fun':", str.includes("fun")); 

let games = ["GTA 5", "God of War", "Valorant", "PUBG", "Call of Duty"];
console.log("\nOriginal Array:", games);

games.push("Minecraft", "FIFA"); 
console.log("After push:", games);

games.pop(); 
console.log("After pop:", games);

games.shift(); 
console.log("After shift:", games);

games.unshift("Fortnite", "Apex Legends");
console.log("After unshift:", games);

console.log("Array joined as string:", games.join(" | "));
console.log("Reversed array:", games.reverse());

games.sort(); 
console.log("Sorted array:", games);

console.log("Index of 'Valorant':", games.indexOf("Valorant")); 
console.log("Checking if 'PUBG' exists:", games.includes("PUBG")); 