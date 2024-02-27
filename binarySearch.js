// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    const temp = input[0].split(" ");
    const N = parseInt(temp[0], 10);
    const X = parseInt(temp[1], 10);
    const numArray = input[1].split(" ").map(n => parseInt(n, 10));
    
    const result = binarySearch(numArray, X);
    
    console.log(result);

}
const binarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(array[mid] === target){
            return mid+1;
        }else if(array[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));