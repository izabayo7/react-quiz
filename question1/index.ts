export const solution = (number: number) => {
    if (number%22===0) return "candybar";
    if (number%11===0) return "bar";
    if (number%2===0)  return "Candy";
    
    return number;
}

console.log(solution(2)); // "Candy"
console.log(solution(11)); // "bar"
console.log(solution(22)); // "candybar"
console.log(solution(51)); // 51