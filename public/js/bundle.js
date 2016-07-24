(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var data = {

	// 所有地址图片
	allImages: ['http://news.sohu.com/upload/moban3/images/zhuanfa.png', 'http://news.sohu.com/upload/moban3/images/right.png', 'http://news.sohu.com/upload/moban3/images/mark.png', 'http://news.sohu.com/upload/moban3/images/dianping.png', 'http://news.sohu.com/upload/moban3/images/left.png', 'http://news.sohu.com/upload/moban3/images/music-on.png', 'http://news.sohu.com/upload/moban3/images/move.png', 'http://news.sohu.com/upload/moban3/images/music.png'],

	// 第一屏
	firstSection: {
		logo: '', //logo
		bg: 'http://i0.itc.cn/20160620/31d1_9076dc8c_f9c2_c156_07b5_4e0ee740768a_1.jpg', //背景图
		startBtn: 'http://i1.itc.cn/20160129/2cf3_a17511a9_0e8e_af4e_e12e_f1f5b6c8790e_1.png' },

	// 向左向右的箭头
	btns: {
		left: 'http://news.sohu.com/upload/moban3/images/left.png', //左箭头
		right: 'http://news.sohu.com/upload/moban3/images/right.png' //右箭头
	},

	// 内容屏
	middleSections: [{
		tit: '阿创70年队史大赛首胜', //主标题
		img1: 'http://i3.itc.cn/20160620/375f_127d2eca_0fd1_5e64_4058_57ba8c4255ad_1.jpg', //图片
		text1: '　　从1946年10月7日在地拉那2-3不敌前南斯拉夫，完成队史首场国际比赛的阿尔巴尼亚队，终于在差不多70年后又书写了本国足球史的新篇章！在2016年6月19日的里昂，他们1-0击败罗马尼亚队后取得了本队在国际大赛决赛圈的历史首胜，而萨迪库的进球也是他们的历史首球。不过他们的主教练意大利人德比亚西赛后毫不讳言，希望我的球队可以继续留在法国然后证明阿尔巴尼亚队可以给更大牌的球队制造麻烦！<br>　　阿尔巴尼亚队首次冲击欧洲杯决赛圈是在1964年西班牙欧洲杯，不过之前的11次冲击无一例外的被挡在决赛圈之外，此次欧洲杯扩军到24支球队，虽然预选赛阶段与葡萄牙队、丹麦队、塞尔维亚队和亚美尼亚队同组，结果阿尔巴尼亚队从死亡之组中杀出一条血路和葡萄牙队一起携手晋级，他们也因此成为和冰岛队、北爱尔兰队、威尔士队和斯洛伐克队一样首次亮相欧洲杯决赛圈的队伍。不过在世预赛中他们冲击了11次目前依然未能有过亮相决赛圈的记录。<br>　　在小组赛前两战先后惜败给瑞士队和法国队后，阿尔巴尼亚队终于在与罗马尼亚队的比赛中完成了历史性突破。要知道曾有过辉煌历史的罗马尼亚在FIFA排行榜上可是曾经有过占据第三名（1997年9月）高位的记录，反观阿尔巴尼亚队在同期排名只有116位，不过这还不是他们的历史最差排名，他们在1997年8月时曾排名第124位，而当时中国队的排名都有58位。<br>　　不过阿尔巴尼亚队的进步是有目共睹的，他们在去年8月时FIFA排名达到历史峰值—排名第22位，而这个排名恰好就是罗马尼亚队上个月的排名。从1997年8月的124位到2015年8月的22位，阿尔巴尼亚人18年的“卧薪尝胆”让自己的排名提升了102位。即使42名的最新排名与历史最高有一定差距，但他们的进步依然是显而易见的。<br>　　当选欧足联本场最佳球员的阿耶蒂赛后说道：“我们是全身心的投入到比赛之中，请记住我们阿尔巴尼亚人的斗志吧，正是我们相互支持，为彼此而战才让比赛变得特殊。直到比赛最后一刻，我们都坚信可以在本届欧洲杯决赛圈中至少赢下一场比赛，我们做到了！”' //概述
	}, {
		tit: '一战击碎68年耻辱纪录', //主标题
		img1: 'http://i2.itc.cn/20160620/375f_04a1f7f3_489f_9c93_a574_84a99c18b4f7_1.jpg', //图片
		text1: '　　在里昂，阿尔巴尼亚队依靠萨迪库上半场尾声阶段的头球破门1-0战胜了罗马尼亚队！这是他们自1948年5月以来首次在大赛中击败对手，此前68年间13次面对罗马尼亚队3平10负的尴尬纪录在这一刻被击得粉碎！阿尔巴尼亚这支“雄鹰”终于在欧洲杯决赛圈赛场展翅高飞！<br>　　尽管阿尔巴尼亚队是首次亮相欧洲杯决赛圈，但他们在前两战所表现出来的战术素养却超乎外界想象，无论是输给瑞士队还是败给法国队媒体都用到了惜败这个词，因为他们在欧洲杯决赛圈的处子秀一开场就因经验不足丢掉一球，并且队长卡纳还早早被罚下场。同东道主法国队更是在坚持了90分钟后，最后阶段连丢两球最终落败。<br>　　打罗马尼亚队，阿尔巴尼亚队从表面来看仍是处于劣势的一方。比赛中罗马尼亚队虽然控球率达到了62%，全场完成了16次射门，但却罕有机会将球打到阿尔巴尼亚队的防守三区，罗马尼亚队有14次射门是来自大禁区之外，在本届欧洲杯截止目前只有葡萄牙队与冰岛队时葡萄牙队（15次）在这项数据上更多，这也显示出阿尔巴尼亚人在防守端做得是非常出色的。<br>　　今天阿尔巴尼亚队并没有被历史所吓倒，此前不胜罗马尼亚队的心理阴影被勇气所扫除，小组赛前两轮总共只有2次射正记录的阿尔巴尼亚队，此役前45分钟就有3次打在门框范围内的射门，当然这包括萨迪库改写历史的那记头槌破门。萨迪库在场上不知疲倦的奔跑只是一个缩影，阿尔巴尼亚队在本届欧洲杯上受到中立球迷的热情支持并非没有道理。<br>　　在赢得本场比赛后，阿尔巴尼亚队也以3分的成绩晋升到了小组第三，目前尚且无法得知他们能否通过四个最好成绩的第三名晋级，但就像《卫报》所说的，当看到他们在欢庆具有历史意义的进球时，那种喜悦就好像他们已经赢得了欧洲杯冠军一样。至于罗马尼亚队，他们在五次征战欧洲杯决赛圈比赛中第四次止步于小组赛阶段。对于阿尔巴尼亚队来说，如果他们有机会征战16强，那么将会面对B组头名，英格兰队或者威尔士队，也有可能与C组头名德国队、波兰队和北爱尔兰队的一支遭遇。' //概述
	}, {
		tit: '阿尔巴尼亚球王金头写历史', //主标题
		img1: 'http://i3.itc.cn/20160620/375f_e615caea_3b15_6d78_3138_56e0fc7250b0_1.jpg', //图片
		text1: '　　萨迪库5次射门打入1球，C罗22次射门0进球！当阿尔巴尼亚队取得历史性突破1-0爆冷击败罗马尼亚队后，ESPN给出了这样的一个数据。这位被租借在列支敦士登的FC瓦杜兹队（参加瑞士超级联赛）效力的锋线球员金头一顶历史翻篇。<br>　　萨迪库在小组赛前两战比赛中作为球队的单箭头打满了180分钟，但由于缺乏支持他并没有获得进球，而阿尔巴尼亚队同样在前两轮挂蛋。当与罗马尼亚队的比赛进行到第43分钟时，对于阿尔巴尼亚人来说历史性的时刻终于到来，当时梅穆沙伊右路传中，罗马尼亚队门将塔塔鲁沙努头脑发热出击却未能摘下皮球，身高1米86的萨迪库在小禁区左角处头球一顶，皮球入网！<br>　　这是阿尔巴尼亚队在欧洲杯决赛圈历史上的首个进球，也是他们在国际大赛决赛圈阶段的历史首球。创造历史的阿尔巴尼亚10号球员欣喜若狂奔向本方替补席滑跪庆祝，兴奋过头的队友与教练们也瞬间把萨迪库压到了身下。<br>　　如此狂喜是可以理解的，要知道这是有70年历史的阿尔巴尼亚队在大赛中的一次重大突破。迄今尚未拿到过世界杯决赛圈名额的阿尔巴尼亚队，自1964年冲击欧洲杯决赛圈以来这还是首次亮相，之前有一种声音是阿尔巴尼亚队之所以可以亮相决赛圈是因为欧洲杯扩军，不过他们在欧预赛中能够力压丹麦队和塞尔维亚队就证明了不俗的实力，而萨迪库在欧预赛与亚美尼亚队的比赛中就曾打进一球，而今天的入球也是他在2016年为国家队贡献的第4球，其国家队总进球数达到了6个。<br>　　萨迪库的进球也要感谢梅穆沙伊在右路的精准妙传，这位常年在意大利踢球的中场球员在此役便创造了多达7次的得分机会，仅比法国队中场核心帕耶在对阵罗马尼亚队时少一次而已。由于球王马拉多纳的名字里也有Armando，和萨迪库同名，阿尔巴尼亚球迷开玩笑说萨迪库现在就是我们的球王！' //概述
	}, {
		tit: '鱼腩创奇迹竟靠意大利式防反', //主标题
		img1: 'http://i1.itc.cn/20160620/375f_f89d4fdd_4507_8125_04f7_4db5ff3f96eb_1.jpg', //图片
		text1: '　　北京时间6月20日凌晨3时，本届欧洲杯新军阿尔巴尼亚在第三轮小组赛凭借前锋萨迪库的进球1-0击败罗马尼亚。阿尔巴尼亚小组赛三战1胜2负积3分升至小组第三，仍然保留有小组出线的希望，这场比赛阿尔巴尼亚攻防两端表现都可圈可点，球队彻底贯彻了意大利主教练德比西的防守反击战术，最终他们也如愿取得了他们参加欧洲杯正赛历史上的第一个进球和第一场胜利。<br>　　阿尔巴尼亚能够从一支欧洲传统鱼腩球队成功闯进本届欧洲杯决赛圈，这本身就创造了阿尔巴尼亚足球的一个奇迹，其中最大的功劳要归功于主教练，意大利人德比亚西，德比亚西执教履历并不算十分辉煌，其此前只是在意甲中下游球队布雷西亚、都灵、乌迪内斯都有过执教经历，2011年12月，他接受阿尔巴尼亚足协的邀请成就了一段传奇的执教生涯。<br>　　2011年接受阿尔巴尼亚以后，德比亚西面对的首个重要的大赛任务便是次年进行的世界杯预选赛，也许是因为球队当时未磨合成型，阿尔巴尼亚最终在2014世界杯欧洲区预选赛上仅仅以3胜2平5负的战绩排名在小组倒数第二无缘出线，当时德比亚西曾吐槽阿尔巴尼亚足球人才匮乏，几乎无人可用，最终阿尔巴尼亚足协对部分有阿尔巴尼亚血统的球星发起了号召，阿尔巴尼亚迅速归化了大部分在曾为其它国家青年队有过出场经历且经验丰富的球员。<br>　　2014年9月开始，2016欧洲杯预选赛正式开打，当时德比亚西已经执教阿尔巴尼亚接近3年的时间，球队除了在得到人员的补充以外，在他的调教下，阿尔巴尼亚国家队逐渐注入了钢筋混凝土式的防守的理念，阿尔巴尼亚在预选赛上曾经击败了拥有C罗的葡萄牙，靠的就是德比亚西这种纯意式的防守反击战术，最终预选赛小组赛阿尔巴尼亚4胜2平2负排名小组赛第二，首次闯进欧洲杯决赛圈。<br>　　本次欧洲杯决赛圈小组赛的三场比赛，阿尔巴尼亚的表现一场比一场出色，尤其是第二场对阵东道主法国，阿尔巴尼亚全队收缩防守打反击收到了很好的效果，若不是最后一分钟格里兹曼上演绝杀，阿尔巴尼亚很有机会在法国身上抢得一分，本场比赛阿尔巴尼亚的防守端同样表现非常出色，尤其是双中卫防守非常稳健，同时进攻端阿尔巴尼亚打出了他们犀利的反击，进攻核心梅穆沙伊本场的表现可以说是世界级球星的水准。<br>　　至目前为止，主帅德比亚西已经带领阿尔巴尼亚取得17胜9平14负的战绩，胜率达到42.5%，虽然胜率并不是非常高，但是他的战术打法简练高效，往往在关键赛事中能够发挥作用，某种程度来说与现在的意大利的打法有相似之处，此前也有传闻说德比亚西接近成为意大利国家队主帅，在孔蒂卸任以后，目前下一届意大利国家队人选还没有最终定论，不过就目前来看，德比亚西无论从他的战术打法以及执教风格而言，以及他在本届欧洲杯带领阿尔巴尼亚所创造出来的神奇，德比亚西是目前蓝衣军团主帅最为热门的人选之一。' //概述
	}, {
		tit: '山鹰之国主帅：我们配得上晋级', //主标题
		img1: 'http://i3.itc.cn/20160620/375f_e57b8387_9702_e159_e57f_0082cdfcf3b3_1.jpg', //图片
		text1: '　　北京时间6月20日凌晨3时，本届欧洲杯A组第三轮小组赛将同时开打，其中罗马尼亚在里昂大球场对阵阿尔巴尼亚。最终阿尔巴尼亚1-0击败罗马尼亚三战1胜2负积3分升至小组第三，仍然保留有小组出线的希望，而罗马尼亚三战1平2负仅积1分小组垫底出局。赛后，激动万分的阿尔巴尼亚主帅德比亚西参加了赛后的新闻发布会，谈到这场比赛，他表示自己的球队给阿尔巴尼亚球迷带来了一个完美的夜晚。<br>　　“这场胜利不仅属于居住在阿尔巴尼亚的球迷，还属于漂泊在世界各地的阿尔巴尼亚人。无论走到哪里，我们的球迷都会给我们最大的支持，他们是场上的第12人，是我们获胜的最大功臣。今天我们终于拿到了欧洲杯首球，这本来在前两场比赛中就可以拿到。我们在比赛中保持着强度和反击质量。我们用头脑踢球，同时充满意志力，这是我希望球队在每场比赛都做到的。”德比亚西说。<br>　　同时，德比亚西还提到了取胜的秘诀，他指出：“我们一直在等着罗马尼亚犯错，我们在反击中一直在寻找空间。在比赛一开始，我们就知道他们肯定会攻得很猛，但我们的防守滴水不漏，不给他们任何空间，同时尝试反击。他们尝试用中场球员和后卫球员冲击我们的防线，但很难找到进攻的空间。我们犯过一些错误，但总的来说还是保持了自己的节奏。”<br>　　展望阿尔巴尼亚的欧洲杯前景，德比亚西认为：“如果我们晋级下一轮，那么我们将在周五或者周六开始踢淘汰赛。在这段时间，我们会关注其他球队的比赛。如果我们留在了16强，我们会给其他队造成一些麻烦，甚至是一些种子队。我觉得通过今天晚上的比赛，我们的信心变得更强了。通过之前的两场比赛，我们逐渐适应了欧洲杯，我希望我们能够留在法国。我是一个乐观的人，我觉得我们应该可以留下来，我们也值得留在这里。我们已经证明了面对强队时我们也能与之一战。”' //概述
	}],

	// 最后一屏
	lastSection: {
		bg: 'http://sports.sohu.com/upload/ruitiyu2016/images/ordinary_bg.jpg', //背景图
		href1: "/cm/455193253/", //点评链接
		reviews: 'http://i1.itc.cn/20160122/34ea_2008adf7_227e_d2b9_7349_39c446f22b35_1.png', //点评图标
		share: "http://i2.itc.cn/20160122/34ea_ce031f8f_747b_1b38_6eee_19c64150417e_1.png", //分享图标
		mark: 'http://news.sohu.com/upload/moban3/images/mark.png', //分享点击提示图
		erweima: 'http://i0.itc.cn/20151021/32c5_d6be27a4_11f5_b0da_222e_f32a9e6b751b_1.jpg', //二维码图标
		adText: '', //广告文字
		adImg: '', //广告图片
		adHref: 'http://sports.sohu.com/' //广告链接
	},

	//音乐
	musicUrls: {}
};

module.exports = data;

},{}],2:[function(require,module,exports){
'use strict';

var $ = window.$;

var data = require("./data.js");

$(function () {
  var Obj = {
    render: function render() {
      var firstDom = '<section class = "pagefirst swiper-slide"><img draggable="false" class = "logo ani" swiper-animate-effect = "shake" swiper-animate-duration="0.2s"  src = ' + data.firstSection.logo + '><img class = "bgImg" draggable="false" src = ' + data.firstSection.bg + '><img draggable="false" class = "move" src="' + data.firstSection.startBtn + '"></section>',
          btnsDom = '<div class="swiper-button-prev"><img draggable="false" src="' + data.btns.left + '" ></div><div class="swiper-button-next"><img draggable="false" src="' + data.btns.right + '"></div>',
          middleDom = '',
          lastDom = '<section class = "pagelast swiper-slide"><img draggable="false" src="' + data.lastSection.bg + '"><a id = "reviews" href="' + data.lastSection.href1 + '"><img draggable="false" class = "reviews ani" swiper-animate-effect = "bounceInLeft" swiper-animate-duration="1s" swiper-animate-delay=".5s" src="' + data.lastSection.reviews + '"></a><a id = "share" href="javascript:void(0)"><img draggable="false" class = "share ani" swiper-animate-effect = "bounceInRight" swiper-animate-duration="1s" swiper-animate-delay=".5s" src="' + data.lastSection.share + '"></a><img draggable="false" class = "code2v" src="' + data.lastSection.erweima + '"><div class="adBox"><a href="' + data.lastSection.adHref + '"><p class="adText">' + data.lastSection.adText + '</p><img draggable="false" class = "adImg" src="' + data.lastSection.adImg + '"></a></div><img draggable="false" id = "mark" src="' + data.lastSection.mark + '"></section>';

      for (var i = 0, len = data.middleSections.length; i < len; i++) {
        middleDom += '<section class = "pages swiper-slide"><h2 class = "tit">' + data.middleSections[i].tit + '</h2><div class="text_cover"><img class="img1" draggable="false" src="' + data.middleSections[i].img1 + '"><div class="cover-1 scale">' + data.middleSections[i].text1 + '</div></div><div id="point"></div></section>';
      };

      var wrapper = $(".swiper-wrapper"),
          container = $(".swiper-container");

      wrapper.append(firstDom);
      wrapper.append(middleDom);
      wrapper.append(lastDom);

      container.append(btnsDom);
    },

    swipers: function swipers() {
      var mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        mousewheelControl: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        onInit: function onInit(swiper) {

          var pre = $(".swiper-button-prev"),
              next = $(".swiper-button-next");

          swiperAnimateCache(swiper);
          swiperAnimate(swiper);
          pre.hide();
          next.css("top", "80.5%");
        },
        onSlideChangeStart: function onSlideChangeStart(swiper) {
          var sections = $("section"),
              pre = $(".swiper-button-prev"),
              next = $(".swiper-button-next"),
              len = sections.length;

          if (mySwiper.activeIndex == 0) {
            pre.hide();
            next.css("top", "80.5%");
          } else if (mySwiper.activeIndex == len - 1) {
            next.hide();
          } else {
            pre.show();
            next.show();
            next.css("top", "90%");
          }
        },
        onSlideChangeEnd: function onSlideChangeEnd(swiper) {
          swiperAnimate(swiper);
        }
      });
    },

    init: function init() {
      var sizeRatio = $(window).width() / 640;
      var size = sizeRatio > 1 ? 1 : sizeRatio;
      $("body").css("font-size", size * 6.25 + "%");

      var share = $("#share"),
          pre = $(".swiper-button-prev"),
          mark = $("#mark");
      share.click(function () {
        mark.show();
        pre.hide();
      });
      mark.click(function () {
        $(this).hide();
        pre.show();
      });
    },

    music: function music() {
      if (data.musicUrls) {
        (function (onSrc, offSrc, musicScr) {
          var str = '<audio src="' + musicScr + '" loop="loop" id="autoplay" autoplay="autoplay"></audio><div class="musicBtn">' + '<img draggable="false" src="' + onSrc + '" class="onImg">' + '<img draggable="false" src="' + offSrc + '" class="offImg">' + '</div>';
          $('body').append(str);
          var audio = document.getElementById('autoplay');
          $('.musicBtn').on('click', function () {
            if (audio.paused) {
              audio.play();
              $('.musicBtn').removeClass('musicOff');
            } else {
              audio.pause();
              $('.musicBtn').addClass('musicOff');
            }
          });
        })(data.musicUrls.onSrc, data.musicUrls.offSrc, data.musicUrls.musicSrc);
      }
    },

    loads: function loads() {
      var that = this;
      function initView() {
        $(".loading").hide();

        that.render();
        that.init();
        that.swipers();
        that.music();
      }

      var loader = new resLoader({
        resources: data.allImages,
        onStart: function onStart(total) {},
        onProgress: function onProgress(current, total) {
          var percent = parseInt(current / total * 100) + "%";
          $(".pace-progress").text(percent);
        },
        onComplete: function onComplete(total) {
          initView();
        }
      });
      loader.start();
    }
  };
  Obj.loads();

  // Obj.render();
  // Obj.swiper();
  // Obj.init();
});

},{"./data.js":1}]},{},[2]);
