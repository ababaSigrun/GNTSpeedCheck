/**
 * 初期読込時に行うこと。
 */
function init() {
    var leaderInfoList = getLeaderInfo();
    var leaderInfoNameList = [];
    console.log(leaderInfoList);
    var count = 0;
    // 指導者の名前を取得(配列）
    leaderInfoList.forEach(function (value) {
        if(count===0 || count%3===0){
            leaderInfoNameList.push(value);
        }
        count++;
    });

    // 指導者設定
    var select = document.getElementsByName("myLeader")[0];
    var enSelect = document.getElementsByName("enLeader")[0];

    leaderInfoNameList.forEach(function (value) {
        // optionタグを作成する
        var option = document.createElement("option");
        option.text = value;
        option.value = value;
        select.appendChild(option);
        // 敵ドロップダウンリストに設定
        var option2 = document.createElement("option");
        option2.text = value;
        option2.value = value;
        enSelect.appendChild(option2);
    });


    



}

