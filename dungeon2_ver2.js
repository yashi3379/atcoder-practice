function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const N = parseInt(input[0], 10);
    //文字列から10進数に変換するときはparseIntを使います
    const A = input[1].split(" ").map(Number);
    const B = input[2].split(" ").map(Number);
    const route = findMinimumTime(N, A, B);

    //出力
    console.log(route.length);
    console.log(route.join(" "));
    
}
//入力例
// 5
// 2 4 1 3
// 5 3 3

// 出力例
// 4
// 1 2 4 5

function findMinimumTime(N, A, B) {
    let dp = new Array(N + 1).fill(Infinity);
    let prev = new Array(N + 1).fill(0); // 各部屋への最短経路で直前にどの部屋を経由したかを記録

    dp[1] = 0; // 部屋1への到達時間は0
    for (let i = 2; i <= N; i++) {
        if (i > 1 && dp[i] > dp[i - 1] + A[i - 2]) {
            dp[i] = dp[i - 1] + A[i - 2];
            prev[i] = i - 1;
        }
        if (i > 2 && dp[i] > dp[i - 2] + B[i - 3]) {
            dp[i] = dp[i - 2] + B[i - 3];
            prev[i] = i - 2;
        }
    }
    // 経路を逆順で構築
    let route = [];
    for (let i = N; i > 0; i = prev[i]) {
        route.push(i); 
        if(i === 1) break;
    }
   
    route.reverse(); // 正しい順序にする

    return route; // 最小時間と経路を返す
}



//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

