// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    //文字列から10進数に変換するときはparseIntを使います
    const N = parseInt(input[0], 10);
    const order = input[1].split(" ").map(Number);
    const q = parseInt(input[2], 10);
    let results = [];
    for(let i=3; i<q+3; i++){
        const [a, b] = input[i].split(" ").map(Number);
        const aIndex = order.indexOf(a);
        const bIndex = order.indexOf(b);
        //orderが2,1,3の時、a=2,b=3の時、order[0]をpushする
        if(aIndex < bIndex){
            results.push(order[aIndex]);
        }else{
            results.push(order[bIndex]);
        }
    }
   
    //出力
    console.log( results.join('\n') );
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
