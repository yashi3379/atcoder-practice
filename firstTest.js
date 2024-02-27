function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    const strSplice = input[0].split('');
    const number = (strSplice.length-1)/2;
    console.log(strSplice[number]);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));


//二問目

function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    nums = input[1].split(" ").map(Number);
    //文字列から10進数に変換するときはparseIntを使います
    const max_num = Math.max(...nums);
    console.log(max_num);
    let count_max = 0;
    let num1_max =false
    
    if(nums[0] === max_num){
      num1_max = true;
    }
    nums.forEach((num)=>{
      if(num === max_num){
        count_max ++
      }
    });
    
    console.log(num1_max);
    console.log(count_max);
    
    if(num1_max ){
      if(count_max > 1){
        console.log(1)
      }else{
        console.log(0)
      }
    }else{
      console.log(max_num - nums[0]+1);
    }
    
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));



