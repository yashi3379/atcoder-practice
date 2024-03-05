// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const[N, T] = input[0].split(" ").map(Number);
    const scores = new Array(N).fill(0);
    let uniqueCount = 1;
    const scoreObj = {0: N};

    for(let i = 1; i<=T; i++){
        const[player, scoreIncrease] = input[i].split(" ").map(Number);
        const prevScore = scores[player - 1];
        const newScore = prevScore + scoreIncrease;
        scores[player - 1] = newScore;

        //古い得点の変更を更新
        if(scoreObj[prevScore] === 1){
            delete scoreObj[prevScore];
            uniqueCount--;
        } else {
            scoreObj[prevScore]--;
        }

        //新しい得点の変更を更新
        if(scoreObj[newScore]){
            scoreObj[newScore]++;
        } else {
            scoreObj[newScore] = 1;
            uniqueCount++;
        }
    }
   
    console.log(uniqueCount);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

