// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const N = parseInt(input[0], 10);
    let char = input[1].split("");
    const q = parseInt(input[2], 10);
    // r a だったら全てのrをaに変える
    // 7
    // atcoder
    // 4
    // r a
    // t e
    // d v
    // a r
    // recoverと出力する
    

    for(let i=3; i<q+3; i++){
        const [a, b] = input[i].split(" ");
        for(let j=0; j<N; j++){
            if(char[j] === a){
                char[j] = b;
            }
        }
    }
    //これだと負荷がかかる

    
    //出力
    //配列を文字列に変換する
    console.log( char.join('') );
    // laklimamriiamrmrllrmlrkramrjimrial


}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));