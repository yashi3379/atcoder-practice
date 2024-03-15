// // 入力例
// const N = 5;
// const A = [2, 4, 1, 3];
// const B = [5, 3, 7];
// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const N = parseInt(input[0], 10);
    //文字列から10進数に変換するときはparseIntを使います
    const A = input[1].split(" ").map(Number);
    const B = input[2].split(" ").map(Number);
    let result = findMinimumTime(N, A, B);
   
    //出力
    console.log(result);
}

function findMinimumTime(N, A, B) {
    let dp = new Array(N + 1).fill(Infinity);
    dp[1] = 0; // 部屋1への到達時間は0
    dp[2] = A[0]; // 部屋1から部屋2への直接移動時間

    for (let i = 3; i <= N; i++) {
        // 直前の部屋から来る場合と2つ前の部屋から来る場合の最短時間を比較
        dp[i] = Math.min(dp[i - 1] + A[i - 2], dp[i - 2] + B[i - 3]);
        //dp[3]はmin（２＋4,0＋5）なので5
        //dp[4]はmin（5+1,2+3）なので5
        //dp[5]はmin（5+3,5+7）なので8
    }

    return dp[N]; // 部屋Nに到達する最短時間=8
}



//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

