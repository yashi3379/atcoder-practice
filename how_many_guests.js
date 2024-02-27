function Main(input) {
    //１行目がinput[0][0]が日数N,input[0][1]が質問数Q
    //2行目がinput[1][0]~input[1][N]が来場者
    //3行目以降が質問でありQが3の時、input[2][0]からinput[2][1]の来場者input[3][0]からinput[3][1]の来場者、
       //input[Q+1][0]からinput[Q+1][1]の来場者を出す
    //計算の出し方はinput[2][0]=2,input[2][1]=3の時、input[1][2-1]の人数とinput[1][3-1]の人数を足す
    
    input = input.split("\n");
    temp1 = input[0].split(" ");
    temp2 = input[1].split(" ");
    //文字列から10進数に変換するときはparseIntを使います
//     var days_num = parseInt(temp1[0], 10);
//     var q_num = parseInt(temp1[1], 10);
   const [days_num, q_num] = input[0].split(" ").map(Number);
//     var visitors = [];
   const visitors = input[1].split(" ").map(Number);
//     var question1 =[];
//     var question2 = [];
//     var temp3 =[];
    let results = []

    for(let i=0; i<temp2.length; i++){
    	visitors.push(parseInt(temp2[i], 10))
    } 
    //0日から日数ごとの合計、最初をゼロにすることでインデックスを合わせられる
   let sumVisitor = new Array(days_num + 1).fill(0);
   for (let i=0; i < days_num; i++) {
        sumVisitor[i + 1] = sumVisitor[i] + visitors[i];
    };
    //計算の出し方はinput[2][0]=2,input[2][1]=3の時、sumVsisitor[3]-sumViisitor[1]を引く二日目の来場者数と三日目の来場者数の合計
    for(let i=0; i<q_num;i++){
    	let[start,end] = input[i + 2].split(" ").map(Number);
    	results.push(sumVisitor[end] - sumVisitor[start - 1]);
    };

    //３行目からQ+1のinputをsplit(" ")しなくてはいけない
//     for(let i=2; i<=q_num+1; i++){
//      temp3.push(input[i].split(" ")) ;
//     }
//     
//     for(let i=0; i< q_num; i++){
//       question1.push(parseInt(temp3[i][0], 10))
//       question2.push(parseInt(temp3[i][1], 10))
//    //question1[0]= 2の時、question2[0]= 4の時、visitors[1],visitors[2],visitors[3]を取ってくる。
//     for(let i=0; i<question1.length; i++){
//     	var num1 = question1[i]
//     	var num2 = question2[i]
//     	var count = 0
//     	 for(let j= num1-1; j<num2; j++ ){
//     	 	count += visitors[j]
//     	 }
//     	 result.push(count);
//     }
    
    //出力
     console.log( results.join('\n') );
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
//[ 15, 24, 1123, 111, 11137 ]


// 10 5
// 8 6 9 1 2 1 10 100 1000 10000
// 2 3
// 1 4
// 3 9
// 6 8
// 1 10