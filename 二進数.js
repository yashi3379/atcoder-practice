function Main(input) {
    
   
    //文字列から10進数に変換するときはparseIntを使います
    var num = parseInt(input, 10);
    var digits = 10;
    var BinaryNumber = 0;
    for(let i=digits-1; i>=0; i--){
      //console.log(`before: ${num}`)
    	if(num/2**i>=1){
    		BinaryNumber += 10**i
    		num -= 2**i
    	  //console.log(`after: ${num}`)
    	}
    }
    result = BinaryNumber.toString().padStart( 10, '0');
   
    //出力
    console.log(result);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
