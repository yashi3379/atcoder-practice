function Main(input) {
    input = input.split("\n");
    const N = parseInt(input[0], 10);
    let chars = input[1].split("");
    const q = parseInt(input[2], 10);

    // 置換マップを作成
    let replaceMap = {};
    for (let i = 3; i < q + 3; i++) {
        const [a, b] = input[i].split(" ");
        // 既に置換予定の文字がマップにあれば、その置換先を更新
        for (let key in replaceMap) {
        //{r: a}がある時,replaceMap[key]のvalueはaであり、{r: r}になる
            if (replaceMap[key] === a) {
                replaceMap[key] = b;
            }
        }
        // 新しい置換をマップに追加
        //{r: a, t: e, d: v,a: r}みたいにobjectに追加する
        if (!replaceMap[a]) {
        //keyがaの時、valueがbになる
            replaceMap[a] = b;
        }
    }

    // 文字列を一度だけ走査して置換
    for (let j = 0; j < N; j++) {
    //atcoderの時、{a:r, t:e ,d:v}のreqlaceMapを使ってrecoverになる
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