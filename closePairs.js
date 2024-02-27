// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const temp = input[0].split(" ");
    const N = parseInt(temp[0], 10);
    const K = parseInt(temp[1], 10);
    const numArray = input[1].split(" ").map(n => parseInt(n, 10));



    // 7 10
    // 11 12 16 22 27 28 31
    //この場合を考える。この時大小との差がK=10以下の組み合わせは、
    //22-11=11 22-12=10 27-11=16 27-12=15 27-16=11 28-11=17 28-12=16 28-16=12  31-11=20 31-12=19 31-16=15 
    //11通りある。

    //全検索
    let count = 0;
    let max = numArray.length - 1;//6
    const maxPair = K*(K-1)/2;
    for (let i = 0; i < N; i++) {
        for (let j = max; j > i; j--) {
            if (numArray[j] - numArray[i] > K) {
                count++;
            } else {
                break;
            };
        };
    };
    console.log(maxPair - count);
}

    //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    Main(require("fs").readFileSync("/dev/stdin", "utf8"));

    
