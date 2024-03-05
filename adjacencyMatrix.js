// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const N = parseInt(input[0], 10);   
    //文字列から10進数に変換するときはparseIntを使います
    for(let i = 1; i<= N; i++){
        let result = [];
        const tmp = input[i].split(" ").map(Number);
        for(let j = 0; j< N; j++){
            if( tmp[j] === 1){
                result.push(j+1);
            }
        }
        console.log(result.join(" "));
    }
   
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

