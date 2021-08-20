/**
 * モビルスーツクラス
 */
class MobileSuit {
    constructor(type, rare, cost, size, skill_1, skill_2, skill_3, terrainsuitability) {
        this.type = type;
        this.rare = rare;
        this.cost = cost;
        this.size = size;
        this.skill_1 = skill_1;
        this.skill_2 = skill_2;
        this.skill_3 = skill_3;
        this.terrainsuitability = terrainsuitability;

    }
}

/**
 * SPEED計算スタートjs
 */
function calcStart(){
    // 機体速度 * 指導者スキル増加分 * item増加分 *艦長スキル * パイロットスキル * 連携スキル * 戦闘開始機体スキル * 演説スキル
    console.log("前衛１　speed:400.2\n 前衛２ speed:350.2");
}