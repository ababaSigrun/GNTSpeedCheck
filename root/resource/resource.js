/**
 * 
 * @returns 指導者一覧（速度関係あるもの）
 */
function getLeaderInfo() {
    var retList = [];
    retList.push('ハマーン', ' 機動増加Ⅲ', 16.5);
    retList.push('キシリア', ' 機動増加Ⅱ', 0);
    retList.push('コンスコン', ' 機動増加Ⅱ', 25);
    retList.push('クワトロ', ' 機動増加Ⅱ攻撃機動Ⅱ', 25);
    retList.push('カミーユ', ' 攻撃機動Ⅱ', 0);
    retList.push('ドレン', ' 機動増加Ⅰ', 0);
    retList.push('ガルマ', ' 機動増加Ⅰ', 0);
    retList.push('ブライト', ' 機動増加Ⅰ', 20);
    retList.push('ドアン', ' 機動増加Ⅰ', 0);
    retList.push('スレッガー', ' 機動増加Ⅰ', 20);
    retList.push('ララァ', ' 機動増加Ⅰ', 0);
    retList.push('ガイア', ' 機動増加Ⅰ', 20);
    retList.push('バニング', ' 機動増加Ⅰ', 0);
    retList.push('トップ', ' 機動増加Ⅰ', 0);
    retList.push('ガトー', ' 機動増加Ⅰ', 0);

    // 加工前のﾋﾟｭｱ部分もおいとく。
    // ハマーン, 機動増加Ⅲ, 16.5
    // キシリア, 機動増加Ⅱ, 0
    // コンスコン, 機動増加Ⅱ, 25
    // クワトロ, 機動増加Ⅱ攻撃機動Ⅱ, 25
    // カミーユ, 攻撃機動Ⅱ, 0
    // ドレン, 機動増加Ⅰ, 0
    // ガルマ, 機動増加Ⅰ, 0
    // ブライト, 機動増加Ⅰ, 20
    // ドアン, 機動増加Ⅰ, 0
    // スレッガー, 機動増加Ⅰ, 20
    // ララァ, 機動増加Ⅰ, 0
    // ガイア, 機動増加Ⅰ, 20
    // バニング, 機動増加Ⅰ, 0
    // トップ, 機動増加Ⅰ, 0
    // ガトー, 機動増加Ⅰ, 0
    return retList;
}


function getRarityList() {
    var retList = [];
    retList.push('★★★★', 4);
    retList.push('★★★', 3);
    retList.push('★★', 2);
    retList.push('★', 1);
    return retList;
}

/**
 * タイプ取得
 */
function getTypeList() {
    var retList = [];
    retList.push("機動", "攻撃", "防御", "万能", "制圧","超機動");
    return retList;
}

/**
 * コスト取得
 */
function getCostList() {
    var retList = [];
    retList.push(10, 9, 8, 7, 6, 5, 4, 3, 2);
    return retList;
}

/**
 * スキル名
 */
function getSkilNameList(){
    var retList = [];
    retList.push("攻撃機動増加Ⅳ", "攻撃機動増加Ⅲ",
    "防御機動増加Ⅳ", "防御機動増加Ⅲ",
    "機動増加Ⅳ", "機動増加Ⅲ", 
    "機動減少Ⅳ", "機動減少Ⅲ", );
    return retList;
}


