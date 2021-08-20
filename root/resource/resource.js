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

/**
 * 艦長スキル（機動上昇のみ）
 * @returns 
 */
function getCaptainSkill(){
    const retList = {
        '全体機動支援Ⅳ': 27.53,
        '全体機動支援Ⅲ': 18.22,
        'その他': 0
    };
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
 * レアリティリスト（連想配列）
 * @returns 
 */
function getRarityMapList() {
    var retList = {
        '★★★★': 4,
        '★★★': 3 ,
        '★★': 2,
        '★':1};
    return retList;
}

/**
 * タイプ取得
 */
function getTypeList() {
    var retList = [];
    retList.push("機動", "攻撃", "防御", "万能", "制圧", "超機動");
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
 * 適正取得
 */
function getSuitabilityList() {
    var retList = [];
    retList.push("A", "B", "C", "D");
    return retList;
}
/**
 * 適正value取得
 */
function getSuitabilityValueList() {
    var retList = [];
    retList.push(10, 5, 0, -5);
    return retList;
}

/**
 * スキル名
 */
function getSkilNameList() {
    var retList = [];
    retList.push("【始動】攻撃機動増加Ⅳ", "【始動】攻撃機動増加Ⅲ",
        "【始動】防御機動増加Ⅳ", "【始動】防御機動増加Ⅲ",
        "【始動】機動増加Ⅳ", "【始動】機動増加Ⅲ",
        "【始動】全体機動増加Ⅳ", "【始動】全体機動増加Ⅲ",
        "【始動】全体機動減少Ⅳ", "【始動】全体機動減少Ⅲ");
    return retList;
}

/**
 * スキルlv4Value
 */
function getSkilLv4ValueList() {
    var retList = [];
    retList.push("【始動】攻撃機動増加Ⅳ", 3.13,
        "【始動】防御機動増加Ⅳ", 3.13,
        "【始動】機動増加Ⅳ", 5.69,
        "【始動】全体機動増加Ⅳ", 1.7,
        "【始動】全体機動減少Ⅳ", 1.28);
    return retList;
}

/**
 * スキルlv3Value
 */
function getSkilLv3ValueList() {
    var retList = [];
    retList.push("【始動】攻撃機動増加Ⅲ", 2.08,
        "【始動】防御機動増加Ⅲ", 2.08,
        "【始動】機動増加Ⅲ", 3.79,
        "【始動】全体機動増加Ⅲ", 1.13,
        "【始動】全体機動減少Ⅲ", 0.85);
    return retList;
}

/**
* スキル名
*/
function getPSkilNameList() {
    var retList = [];
    retList.push("【始動】攻撃機動増加Ⅳ", "【始動】攻撃機動増加Ⅲ",
        "【始動】防御機動増加Ⅳ", "【始動】防御機動増加Ⅲ",
        "【始動】機動増加Ⅳ", "【始動】機動増加Ⅲ");
    return retList;
}