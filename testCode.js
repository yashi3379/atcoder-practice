//３文字の英語が送られる。その中で英文字が被っていないものだけを取り出す関数を作る

//aabの時、取り出されるのはb,abcの時、取り出されるのはabcである。

//bbcの時を考える
//１、bbcを一つ一つに区切る+結果を挿入する空の配列を作る
//２、一つ目のbで場合分けをする
//３、二つ目と同じで三つ目と違う場合三つ目が被ることはないのでそれをpushする

//全体のプロセスを考える
//１、一つ目と二つ目の文字が同じ時、bbcで考えた時のように結論が出るので違う時のプロセスを考える
//２、二つ目の文字と三つ目の文字の場合分けをすると全ての結果が出る。

const oneString = (str) => {
    const strSplice = str.slice('');
    const result = [];

    if (strSplice[0] == strSplice[1]) {
        if (strSplice[0] !== strSplice[2]) {
            result.push(strSplice[2]);
        }
    } else {
        if (strSplice[1] == strSplice[2]) {
            result.push(strSplice[0]);
        }else{
           const arr = [...strSplice];
            result.push(arr);
        }
    }
    return result;
}

//3文字以上の時最大100文字の時を考える
//acddeの時を考える
//aが他四つと比較してどれとも等しくなかったらpushする
//acddeの時被らないのでpush
//その後,二つ目三つ目を順番にやっていく
//3番目のdが被っていたら4番目のdをループさせるのは無駄な処理
//被っていた場合、配列doubleにpush
//毎回被っているdoubleと比較してなかったらループさせる
const oneString2 = (str) =>{
    const strSplice = str.slice('');
    const result = [];
    const double =[];
    for (let i =0;i<strSplice.length; i++){
    	let trueFlag = true
    	if(double.includes(strSplice[i])){
    		break;
    	}
    	for(let j = i+1; j<strSplice.length; j++){
    		if(strSplice[i]==strSplice[j] ){
    			trueFlag = false;
    			break;
    	}
    	if(trueFlag){
    		result.push(strSplice[i])
    	}else{
    		double.push(strSplice[i])
    	}		
    }
}
return [...result];
}