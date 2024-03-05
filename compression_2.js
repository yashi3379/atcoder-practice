// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    //文字列から10進数に変換するときはparseIntを使います
    const N = parseInt(input[0], 10);
    // 5
    // 46 80 11 77 46
    // この場合,
    // 2 4 1 3 2　と出力する
    const numArray = input[1].split(" ").map(n => parseInt(n, 10));
    //numArrayは[46,80,11,77,46]となる
    const sortedArray = numArray.slice().sort((a, b) => a - b);
    //sortedArrayは[11,46,46,77,80]となる
    //被っている数字を取り除く
    const compressedArray = Array.from(new Set(sortedArray));
    //compressedArrayは[11,46,77,80]となる
    const result = numArray.map(n => binarySearch(compressedArray, n) + 1);
    //numArrayの中にある数字をcompressedArrayの中で探し、そのインデックスを返す
    
    //出力
    console.log(result.join(" "));
}
function binarySearch(arr, x) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
  
        if (arr[mid] === x) return mid;
        else if (arr[mid] < x) start = mid + 1;
        else end = mid - 1;
    }
    //見つからない場合はない
  
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));