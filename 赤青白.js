function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    tmp = input.split(" ");

    //文字列から10進数に変換するときはparseIntを使います
    var n = parseInt(tmp[0], 10);
    var x = parseInt(tmp[1], 10);

    var count = 0;
    if(n<x){
     if (!(n * 3 < x)) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i + n * 2 < x) {
                    break;
                }
                for (let k = 1; k <= n; k++) {
            
                    if (i + j + n < x) {
                        break;
                    }
                    if (i + j + k == x) {
                        count++
                        break;
                    }
                }
            }
        }
     }
    }else{
      for (let i = 1; i <= x; i++) {

            for (let j = 1; j <= x; j++) {
                if (i + j == x) {
                    break;
                }
                for (let k = 1; k <= x; k++) {
            
                    if (i + j + k == x) {
                        count++
                        break;
                    }
                }
            }
        }
      
    }



    //出力
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));