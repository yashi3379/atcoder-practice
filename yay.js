// inputに入力データ全体が入る
function Main(input) {
    input = input.split("\n");
    char = input[0].split("");

    //文字列の中に一つだけ違う文字がある。それが何番目かを求める
    //例、zzzzzwzだったら6番目が違う
    //例、azzzzzzだったら1番目が違う
    //例、zazzzzwだったら2番目が違う
    //例、zzzazzzだったら3番目が違う
    let result = 0;
    const first = char[0];
    const second = char[1];
    const third = char[2];
    if(first === second && second === third ){
        for(let i=3; i<char.length; i++){
            if(char[i] !== first){
                result = i+1;
                break;
            }
        }
    }else if(first === second && second !== third){
        result = 3;
    }else if(first === third && second !== third){
        result = 2;
    }else {
        result = 1;
    }
    

    //出力
    console.log(result);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));