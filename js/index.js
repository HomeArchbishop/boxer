/**
 * @file index.js
 * @author 拆家大主教
 * @date 2020-6-20
 * @lastModifiedTime  2020-6-21
 */
var TargetPeople = document.getElementById('打拳对象').value;
var TargetPeopleSex = "木大木大木大木大木大"
var TargetPeopleSexRadio = document.getElementsByName('sex');
var TargetEvent = document.getElementById('打拳事件').value;
var TargetPeopleSexContrary = TargetPeopleSex;
var Famous = data.famous;   //a 代表前面垫话，b代表后面垫话
var Front = data.before;   //在名人名言前面弄点废话
var Back = data.after;   //在名人名言后面弄点废话
var Crap1 = data.bosh1;   //代表文章主要废话来源
var Crap2 = data.bosh2;   //代表文章主要废话来源
var Begin = data.begin; //开头
var End = data.end; //结尾
/**
 * @function Total() - 主函数
 */
function Total() {
    TargetPeople = document.getElementById('打拳对象').value;
    TargetEvent = document.getElementById('打拳事件').value;
    if(TargetPeopleSexRadio[0].checked) {
        TargetPeopleSex = "男";
        TargetPeopleSexContrary = "女";
    }else if(TargetPeopleSexRadio[1].checked) {
        TargetPeopleSex = "女";
        TargetPeopleSexContrary = "男";
    }else {
        TargetPeopleSex = "第三";
        TargetPeopleSexContrary = "男性和女";
    }
    console.log(TargetPeopleSex);
    //生成article
    document.getElementById('article').innerHTML = '<p id="InnerArticle"></p>';
    var Tmp = "";
    Tmp += GetBegin();
    var SentenceInThisParagragh = 0;
    while(Tmp.length < 10000) {
        var Branch = 100 * Math.random();
        if(Branch < 5 && SentenceInThisParagragh > 5) {
            if(Tmp[-1] != "，") {
                Tmp += AnotherCrap1();
            }
            Tmp += AnotherParagraph();
            SentenceInThisParagragh = 0;
        }
        else if(Branch < 20){
            Tmp += FamousSayings()
            SentenceInThisParagragh++;
        }
        else if(Branch < 60){
            Tmp += AnotherCrap1();
            SentenceInThisParagragh++;
        }
        else {
            Tmp += AnotherCrap2();
            SentenceInThisParagragh++;
        }
    }
    Tmp += GetEnd();
    document.getElementById('InnerArticle').innerHTML = Tmp;
    //console.log(Tmp);
}

/**
 * @function AntherParagragh() - 换行
 */
function AnotherParagraph() {
    var xx = "<p>    ";
    return xx;
}

/**
 * @function FamousSayings() - 名言
 */
function FamousSayings() {
    var xx = "";
    var a = Front[Math.floor(Front.length * Math.random())];
    var b = Back[Math.floor(Back.length * Math.random())];
    xx = Famous[Math.floor(Famous.length * Math.random())];
    xx = xx.replace(/a/g,a);
    xx = xx.replace(/b/g,b);
    xx = xx.replace(/x/g,TargetPeople);
    xx = xx.replace(/y/g,TargetEvent);
    xx = xx.replace(/z/g,TargetPeopleSex);
    xx = xx.replace(/s/g,TargetPeopleSexContrary);
    return xx;
}

/**
 * @function AntherCrap1() - 结尾为句号的废话
 */
function AnotherCrap1() {
    var xx = "";
    xx = Crap1[Math.floor(Crap1.length * Math.random())];
    xx = xx.replace(/x/g,TargetPeople);
    xx = xx.replace(/y/g,TargetEvent);
    xx = xx.replace(/z/g,TargetPeopleSex);
    xx = xx.replace(/s/g,TargetPeopleSexContrary);
    return xx;
}

/**
 * @function AntherCrap2() - 结尾为逗号的废话
 */
function AnotherCrap2() {
    var xx = "";
    xx = Crap2[Math.floor(Crap2.length * Math.random())];
    xx = xx.replace(/x/g,TargetPeople);
    xx = xx.replace(/y/g,TargetEvent);
    xx = xx.replace(/z/g,TargetPeopleSex);
    xx = xx.replace(/s/g,TargetPeopleSexContrary);
    return xx;
}

/**
 *  @function GetBegin() - 文章开头
 */
function GetBegin() {
    var xx = "";
    xx = Begin[Math.floor(Begin.length * Math.random())];
    xx = xx.replace(/x/g,TargetPeople);
    xx = xx.replace(/y/g,TargetEvent);
    xx = xx.replace(/z/g,TargetPeopleSex);
    xx = xx.replace(/s/g,TargetPeopleSexContrary);
    return xx;
}

/**
 * @function GetEnd() - 文章结尾
 */
function GetEnd() {
    var xx = "";
    xx = End[Math.floor(End.length * Math.random())];
    xx = xx.replace(/x/g,TargetPeople);
    xx = xx.replace(/y/g,TargetEvent);
    xx = xx.replace(/z/g,TargetPeopleSex);
    xx = xx.replace(/s/g,TargetPeopleSexContrary);
    return xx;
}