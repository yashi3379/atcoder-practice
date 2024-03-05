// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const N = parseInt(input[0], 10);
    
   let result = -1;
   for(let i = Math.floor(Math.cbrt(N)); i > 0; i--){
       const cube = i ** 3;
       if(cube > N){
           continue;
       }
       const str = cube.toString();
       if(str === str.split("").reverse().join("")){
           result = cube;
           break;
       }
   }
   console.log(result);
    
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

