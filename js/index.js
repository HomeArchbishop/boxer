/*
 * @Author: 拆家大主教 
 * @Date: 2021-09-27 21:57:38 
 * @Last Modified by: 拆家大主教
 * @Last Modified time: 2021-09-27 23:08:06
 */

const sexMap = {
    male: {
        targetPeopleSex: "男",
        targetPeopleSexContrary: "女"
    },
    female: {
        targetPeopleSex: "女",
        targetPeopleSexContrary: "男"
    },
    thirdSex: {
        targetPeopleSex: "第三",
        targetPeopleSexContrary: "男性和女"
    },
}

let targetPeople;
let targetPeopleSex;
let targetPeopleSexContrary;

let targetPeopleSexRadio = $('[name="sex"]');
let targetEvent = $('#event').val();

const famous = data.famous;   //a 代表前面垫话，b代表后面垫话
const front = data.before;   //在名人名言前面弄点废话
const back = data.after;   //在名人名言后面弄点废话
const crap1 = data.bosh1;   //代表文章主要废话来源
const crap2 = data.bosh2;   //代表文章主要废话来源
const begin = data.begin; //开头
const end = data.end; //结尾

/**
 * 主函数
 */
function total() {
    targetPeople = $('#target').val();
    targetEvent = $('#event').val();
    targetPeopleSex =
        (
            targetPeopleSexRadio[0].checked
                ? sexMap.male
                : targetPeopleSexRadio[1].checked
                    ? sexMap.female
                    : sexMap.thirdSex
        ).targetPeopleSex
    targetPeopleSexContrary =
        (
            targetPeopleSexRadio[0].checked
                ? sexMap.male
                : targetPeopleSexRadio[1].checked
                    ? sexMap.female
                    : sexMap.thirdSex
        ).targetPeopleSexContrary

    //生成article
    let tmp = paragraphStart();
    tmp += getBegin();

    let sentenceInThisParagragh = 0;
    while (tmp.length < 10000) {
        const branch = 100 * Math.random();
        if (branch < 5 && sentenceInThisParagragh > 5) {
            tmp[-1] !== "，"
            && (tmp += anotherCrap1());
            tmp += paragraphEnd() + paragraphStart();
            sentenceInThisParagragh = 0;
        }
        else if (branch < 20) {
            tmp += famousSayings()
            sentenceInThisParagragh++;
        }
        else if (branch < 60) {
            tmp += anotherCrap1();
            sentenceInThisParagragh++;
        }
        else {
            tmp += anotherCrap2();
            sentenceInThisParagragh++;
        }
    }
    tmp += getEnd();
    $('#article').html(tmp);
}

/**
 * 换行
 */
function paragraphStart() {

    return "<p>    ";
}

/**
 * 换行
 */
 function paragraphEnd() {

    return "</p>";
}

/**
 * 名言
 */
function famousSayings() {

    let a = front[Math.floor(front.length * Math.random())];
    let b = back[Math.floor(back.length * Math.random())];
    return famous[Math.floor(famous.length * Math.random())]
        .replace(/a/g, a)
        .replace(/b/g, b)
        .replace(/x/g, targetPeople)
        .replace(/y/g, targetEvent)
        .replace(/z/g, targetPeopleSex)
        .replace(/s/g, targetPeopleSexContrary);
}

/**
 * 结尾为句号的废话
 */
function anotherCrap1() {
    
    return crap1[Math.floor(crap1.length * Math.random())]
        .replace(/x/g, targetPeople)
        .replace(/y/g, targetEvent)
        .replace(/z/g, targetPeopleSex)
        .replace(/s/g, targetPeopleSexContrary);
}

/**
 * 结尾为逗号的废话
 */
function anotherCrap2() {

    return crap2[Math.floor(crap2.length * Math.random())]
        .replace(/x/g, targetPeople)
        .replace(/y/g, targetEvent)
        .replace(/z/g, targetPeopleSex)
        .replace(/s/g, targetPeopleSexContrary);
}

/**
 * 文章开头
 */
function getBegin() {

    return begin[Math.floor(begin.length * Math.random())]
        .replace(/x/g, targetPeople)
        .replace(/y/g, targetEvent)
        .replace(/z/g, targetPeopleSex)
        .replace(/s/g, targetPeopleSexContrary);
}

/**
 * 文章结尾
 */
function getEnd() {

    return end[Math.floor(end.length * Math.random())]
        .replace(/x/g, targetPeople)
        .replace(/y/g, targetEvent)
        .replace(/z/g, targetPeopleSex)
        .replace(/s/g, targetPeopleSexContrary);
}