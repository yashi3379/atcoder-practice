// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const[A, B] = input[0].split(" ").map(Number);
    //文字列から10進数に変換するときはparseIntを使います
    const total = A + B;

    if(total === 4){
        console.log(5);
    }else {
        console.log(4);
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

