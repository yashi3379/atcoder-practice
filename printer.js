// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const temp = input[0].split(" ");
    const N = parseInt(temp[0], 10);
    const K = parseInt(temp[1], 10);
    const numArray = input[1].split(" ").map(n => parseInt(n, 10));
    //プリンターの数がN台、プリントする枚数がK枚
    //numArrayには速度が入っており同時に起動することができる
    //例えば、N=3,K=7,numArray=[2,3,4]の時、8秒で終わる
    //出力は８

    let left = 0;
    //最大値はnumArrayの最後の値とKをかけたもの
    let right = numArray[numArray.length - 1] * K;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        //例でいうと0+28/2=14 二回目は0+13/2=6 三回目は6+13/2=9　四回目は6+8/2=7 

        let sum = 0;
        for (let i = 0; i < N; i++) {
            sum += Math.floor(mid / numArray[i]);
            //例でいうと14/2+14/3+14/4=7+4+3=14　二回目は6/2+6/3+6/4=3+2+1=6
            //三回目は9/2+9/3+9/4=4+3+2=9　四回目は7/2+7/3+7/4=3.5+2.3+1.75=7
        }
        if (sum >= K) {
            right = mid - 1;//14-1=13 9-1=8 7+1=6 
        } else {
            left = mid + 1;//6+1=7 6+1=7

    }

}
if (left > right) {
    console.log(left);
} else {
    console.log(right);
}

}



//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));