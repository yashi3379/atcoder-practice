// r a だったら全てのrをaに変える
    // 7
    // atcoder
    // 4
    // r a
    // t e
    // d v
    // a r
    // recoverと出力する
function Main(input) {
    input = input.split("\n");
    const N = parseInt(input[0], 10);
    let chars = input[1].split("");
    const q = parseInt(input[2], 10);

    // 置換マップを作成
    let replaceMap = {};
    for (let i = 3; i < q + 3; i++) {
        const [a, b] = input[i].split(" ");
        //一回目はa=r,b=aとなる、二回目はa=t,b=eとなる、三回目はa=d,b=vとなる、四回目はa=a,b=rとなる
        // 既に置換予定の文字がマップにあれば、その置換先を更新
        for (let key in replaceMap) {
        //replaceMapのkeyがaの時、valueがbになる
        //具体的には、一回目はkeyがないので何もしない
        //四回目の時、replaceMap[r] === aがtrueになるので、replaceMap[r] = rになる
            if (replaceMap[key] === a) {
                replaceMap[key] = b;
                //四回目はreplaceMap[r] = r
            }
        }
        // 新しい置換をマップに追加
        //一回目のfor文でkeyがrがないので、key=r,value=aを追加する
        if (!replaceMap[a]) {
        //keyがaの時、valueがbになる
            replaceMap[a] = b;
            //一回目はreplaceMap[r] = a
            //四回目の時にreplaceMap[r] = rになる
            //二回目はreplaceMap[t] = e
            //三回目はreplaceMap[d] = v
            //四回目はreplaceMap[a] = r
        }
    }

    // 文字列を一度だけ走査して置換
    for (let j = 0; j < N; j++) {
    //atcoderの時、{r:r,t:e,d:v,a:r}となる。よってrecoverと出力される
        if (replaceMap[chars[j]]) {
            //chars[0]がaの時、replaceMapのkey=aのvalueはrになる
            chars[j] = replaceMap[chars[j]];
        }
    }

    console.log(chars.join(""));
}
//laklimamriiamrmrllrmlrkramrjimrial
//laklimamriiamrmrllrmlrkramrjimrial
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));