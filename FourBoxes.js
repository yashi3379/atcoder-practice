// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const temp = input[0].split(" ");
    //文字列から10進数に変換するときはparseIntを使います
    const N = parseInt(temp[0], 10);
    const K = parseInt(temp[1], 10);
    const A_array = input[1].split(" ").map(n => parseInt(n, 10));
    const B_array = input[2].split(" ").map(n => parseInt(n, 10));
    const C_array = input[3].split(" ").map(n => parseInt(n, 10));
    const D_array = input[4].split(" ").map(n => parseInt(n, 10));

    //N = arrayの長さ

    // 3 50
    // 3 9 17
    // 4 7 9
    // 10 20 30
    // 1 2 3
    //この場合、50になる組み合わせは存在するからyes

    let AB_array = [];
    let CD_array = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            AB_array.push(A_array[i] + B_array[j]);
            CD_array.push(C_array[i] + D_array[j]);
        }
    }
    //CD_arrayを昇順にソートする
    CD_array.sort((a, b) => a - b);

    let result = "No";

    // for(let sumAB of AB_array){
    //     if(binarySearch(CD_array, K - sumAB)){
    //         result = "Yes";
    //         break;
    //     }
    // }
    AB_array.some(sumAB => {
        if (binarySearch(CD_array, K - sumAB)) {
            result = "Yes";
            return true;
        }
    });


    //出力
    console.log(result);
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));