/**
 * 初期読込時に行うこと。
 */
function init() {
    // 指導者をドロップダウンリストに設定
    setLeaderName();
    // MSの設定を行う。
    drawMS();



}


/**
 * 指導者をドロップダウンリストに設定
 */
function setLeaderName() {
    // リーダ名取得
    var leaderInfoList = getLeaderInfo();
    var leaderInfoNameList = [];
    console.log(leaderInfoList);
    var count = 0;
    // 指導者の名前を取得(配列）
    leaderInfoList.forEach(function (value) {
        if (count === 0 || count % 3 === 0) {
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

/**
 * MS設定部分描写まとめ
 */
function drawMS() {
    drawMSSetting("myBack1");
    drawMSSetting("myFront1");
    drawMSSetting("enBack1");
    drawMSSetting("enFront1");
    drawMSSetting("myBack2");
    drawMSSetting("myFront2");
    drawMSSetting("enBack2");
    drawMSSetting("enFront2");
    drawMSSetting("myBack3");
    drawMSSetting("myFront3");
    drawMSSetting("enBack3");
    drawMSSetting("enFront3");
}

/**
 * MS設定部分描写詳細
 */
function drawMSSetting(name) {
    var div = document.getElementsByName(name)[0];
    /////////////////////////////////////////////////////////////////////
    // p要素を作成する。(rera)　ここちゃんとメソッドで分けること。（リファクタ必須）
    var pElementRera = document.createElement('p');
    pElementRera.name = name + "ReraType";
    var p = div.appendChild(pElementRera);

    // 追加したｐタグを取得する。
    // var p = document.getElementsByName( name +"ReraType")[0];
    var selectReraElement = document.createElement('select');
    // リアリティリスト取得
    var reraOptionWord = getRarityList();
    var count = 0;

    reraOptionWord.forEach(function (value) {
        if (count === 0 || count % 2 === 0) {
            var reraOption = document.createElement("option");
            reraOption.text = value;
            reraOption.value = value;
            selectReraElement.appendChild(reraOption);
        }
        count++;
    });
    var textNode = document.createTextNode('レア度');
    p.appendChild(selectReraElement);
    p.appendChild(textNode);
    //////////////////////////////////////////////////////////////
    var selectTypeElement = document.createElement('select');
    // タイプリスト取得
    var typeOptionWord = getTypeList();
    typeOptionWord.forEach(function (value) {
        var typeOption = document.createElement("option");
        typeOption.text = value;
        typeOption.value = value;
        selectTypeElement.appendChild(typeOption);
    });
    var textNode = document.createTextNode('タイプ');
    p.appendChild(selectTypeElement);
    p.appendChild(textNode);



    //////////////////////////////////////////////////////////////
    var pElementCost = document.createElement('p');
    pElementCost.name = name + "Cost";
    var p = div.appendChild(pElementCost);
    //////////////////////////////////////////////////////////////
    var selectCostElement = document.createElement('select');
    // コストリスト取得
    var costOptionWord = getCostList();
    costOptionWord.forEach(function (value) {
        var costOption = document.createElement("option");
        costOption.text = value;
        costOption.value = value;
        selectCostElement.appendChild(costOption);
    });
    var textNode = document.createTextNode('コスト');
    p.appendChild(selectCostElement);
    p.appendChild(textNode);
    //////////////////////////////////////////////////////////////
    var selectSuitabilityElement = document.createElement('select');
    // 適正リスト取得
    var suitabilityOptionWord = getSuitabilityList();
    suitabilityOptionWord.forEach(function (value) {
        var suitabilityOption = document.createElement("option");
        suitabilityOption.text = value;
        suitabilityOption.value = value;
        selectSuitabilityElement.appendChild(suitabilityOption);
    });
    var textNode = document.createTextNode('適正');
    p.appendChild(selectSuitabilityElement);
    p.appendChild(textNode);
    //////////////////////////////////////////////////////////////


    var pElementSkill = document.createElement('p');
    pElementSkill.name = name + "Skill";
    var p = div.appendChild(pElementSkill);
    //////////////////////////////////////////////////////////////
    var selectSkill1Element = document.createElement('select');
    var selectSkill2Element = document.createElement('select');
    var selectSkill3Element = document.createElement('select');
    // スキルリスト取得
    var skillOptionWord = getSkilNameList();
    skillOptionWord.forEach(function (value) {
        var skillOption1 = document.createElement("option");
        var skillOption2 = document.createElement("option");
        var skillOption3 = document.createElement("option");
        skillOption1.text = value;
        skillOption1.value = value;
        skillOption2.text = value;
        skillOption2.value = value;
        skillOption3.text = value;
        skillOption3.value = value;
        selectSkill1Element.appendChild(skillOption1);
        selectSkill2Element.appendChild(skillOption2);
        selectSkill3Element.appendChild(skillOption3);
    });
    var textNode1 = document.createTextNode('スキル１');
    var textNode2 = document.createTextNode('スキル２');
    var textNode3 = document.createTextNode('スキル３');
    p.appendChild(selectSkill1Element);
    p.appendChild(textNode1);
    p.appendChild(selectSkill2Element);
    p.appendChild(textNode2);
    p.appendChild(selectSkill3Element);
    p.appendChild(textNode3);

    //////////////////////////////////////////////////////////////
    var pElementPSkill = document.createElement('p');
    pElementPSkill.name = name + "PSkill";
    var p = div.appendChild(pElementPSkill);
    //////////////////////////////////////////////////////////////
    var selectPSkillElement = document.createElement('select');
    // Pスキル取得
    var pSkillOptionWord = getPSkilNameList();
    pSkillOptionWord.forEach(function (value) {
        var skillOption = document.createElement("option");
        skillOption.text = value;
        skillOption.value = value;
        selectPSkillElement.appendChild(skillOption);
    });
    var textNode = document.createTextNode('パイロットスキル');
    p.appendChild(selectPSkillElement);
    p.appendChild(textNode);
}