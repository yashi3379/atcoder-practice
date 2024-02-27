//Atcoder

// inputに入力データ全体が入る
//37の時 2**6+2**1
function Main(input) {
    
   
    //文字列から10進数に変換するときはparseIntを使います
    var num = parseInt(input, 10);
    var digits = 10;
    var Binary_number = 0;
    for(let i=digits; i>0; i--){
    	if(num/2**i>0){
    		Binary_number += 10**i
    		num -= 2**i
    	}
    }
    result = Binary_number.toString().padStart( 10, '0');
   
    //出力
    console.log(result);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));