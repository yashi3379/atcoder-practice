// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const[N, S] = input[0].split(" ").map(Number);
    //文字列から10進数に変換するときはparseIntを使います
    const A = input[1].split(" ").map(Number);
//入力例
// 3 7
// 2 2 3

//出力例
//Yes
    let result = subsetSum(N, S, A);
    console.log(result);

}

function subsetSum(N, S, A) {
    // dp配列を初期化する
    let dp = [];
    for (let i = 0; i <= N; i++) {
        dp[i] = [];
        for (let j = 0; j <= S; j++) {
            dp[i][j] = false;
        }
    }
    dp[0][0] = true; // 0個の数で和0を作ることは可能

    // dpテーブルを埋める
    outer:
    for (let i = 1; i <= N; i++) {
        for (let j = 0; j <= S; j++) {
            // A[i-1] を選ばない場合、前の行の値を引き継ぐ
            dp[i][j] = dp[i-1][j];
            // A[i-1] を選ぶ場合
            if (j >= A[i-1] && dp[i-1][j-A[i-1]]) {
                dp[i][j] = true;
                break outer;
            }
        }
    }

    // 最終的な結果を返す
    if (dp[N][S]) {
        return "Yes";
    } else {
        return "No";
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

