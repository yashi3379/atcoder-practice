//ある会社では  D 日間にわたってイベントが開催され，
// N 人が出席します．参加者 i は L,i日目から R i日目まで出席する予定です． 
//各日の出席者数を出力するプログラムを作成してください

//1<=D,N<=10**5
//1<=Li<=Ri<=D
//三日間で４人参加
//1~3日が二人、２日のみが一人、三日のみが一人を考えてみる
//＃入力
//3
//4
//1 3
//1 3
//2 2
//3 3
//#出力
//2   1日目二日目三日目を足す
//3   4
//3　4-1で出す

// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
   let day_num = parseInt(input[0],10)
   let visitor_total = parseInt(input[1],10);
   

    //文字列から10進数に変換するときはparseIntを使います
   let changes = new Array(day_num+1 ).fill(0);
   
   for(let i=0; i<visitor_total; i++){
       const[first_day, last_day] = input[i+2].split(' ').map(Number);
       changes[first_day -1] += 1;
       changes[last_day] -=1;
     }
     
     let visitors = new Array(day_num).fill(0);
     visitors[0]= changes[0];
     for(let i = 1; i< day_num; i++){
         visitors[i] = visitors[i-1]+changes[i];
     }
           
    //出力
     for(let i=0; i< day_num; i++){
         console.log(visitors[i]);
      }
    }


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));


