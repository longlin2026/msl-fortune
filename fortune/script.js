// MSL 千里马运势签 - 修复版

(function() {
    'use strict';

    // 30条签文
    var fortunes = [
        {id: 1, level: "大吉", levelCode: "da-ji", title: "🐎 千里马遇伯乐", content: "那位难搞的大主任，终于记住你名字了", detail: "你的专业被看见。下周的拜访，对方会主动询问你的意见。准备一份精炼的数据总结，机会留给有准备的人。", luck: {career: 95, wealth: 80, love: 70, health: 85}},
        {id: 2, level: "大吉", levelCode: "da-ji", title: "🚀 一马当先", content: "你提的医学洞察被总部采纳，全球分享", detail: "三个月前那个'不确定有没有价值'的观察，现在成了关键策略。相信你的直觉，MSL的眼睛能看见数据背后的故事。", luck: {career: 98, wealth: 75, love: 72, health: 80}},
        {id: 3, level: "大吉", levelCode: "da-ji", title: "✨ 马到成功", content: "下周见的KOL态度180度转弯，主动问你要新资料", detail: "曾经的反对者变成了支持者。不是你说服了他，是他自己看到了证据。保持谦逊，功劳属于科学。", luck: {career: 96, wealth: 82, love: 78, health: 88}},
        {id: 4, level: "大吉", levelCode: "da-ji", title: "🌟 万马奔腾", content: "团队协作如有神助，项目提前一个月落地", detail: "医学部、销售部、市场部，本周空前默契。你恰好处在信息交汇点，做那个传递火炬的人。", luck: {career: 94, wealth: 85, love: 80, health: 90}},
        {id: 5, level: "大吉", levelCode: "da-ji", title: "🎊 金马玉堂", content: "年度评估超出预期，陈博士给你写了推荐信", detail: "不只是KPI。有人注意到了你在'不确定'里的坚持。那封邮件已经在路上了，年后会有好消息。", luck: {career: 97, wealth: 88, love: 75, health: 82}},
        {id: 6, level: "中吉", levelCode: "zhong-ji", title: "📚 马不停蹄", content: "读完三篇NEJM，发现它们之间的矛盾之处", detail: "AI读得很快，但你读得很深。那个被忽略的亚组分析，可能藏着下一个大发现。写下来，和周教授聊聊。", luck: {career: 85, wealth: 70, love: 68, health: 75}},
        {id: 7, level: "中吉", levelCode: "zhong-ji", title: "☕ 老马识途", content: "早茶偶遇十年前的客户，聊出一个IIT机会", detail: "陶陶居二楼的偶遇不是运气，是你十年如一日的'在场'。那些你记得的细节，对方也记得。", luck: {career: 82, wealth: 75, love: 72, health: 80}},
        {id: 8, level: "中吉", levelCode: "zhong-ji", title: "🌅 快马加鞭", content: "赶在最后期限前提交，系统显示你是第888位", detail: "数字吉利，但更重要的是你没有敷衍。那份报告的脚注里，藏着你对患者的真正关心。", luck: {career: 80, wealth: 72, love: 70, health: 78}},
        {id: 9, level: "中吉", levelCode: "zhong-ji", title: "🎯 汗马功劳", content: "销售部阿杰终于搞懂了那个机制，你在他眼中看到光", detail: "教育不是灌输，是点燃。这周的培训，有人听进去了。下周的拜访，他会用得上的。", luck: {career: 84, wealth: 68, love: 75, health: 82}},
        {id: 10, level: "中吉", levelCode: "zhong-ji", title: "🔍 庖丁解牛", content: "混乱的临床数据里，你找到了那条隐藏的线索", detail: "AI看到了相关性，你看到了因果。那个'异常值'不是噪声，是一个真实的人。记下来，这是一个琥珀。", luck: {career: 86, wealth: 70, love: 68, health: 76}},
        {id: 11, level: "中吉", levelCode: "zhong-ji", title: "🤝 马首是瞻", content: "新来的MSL问你职业规划，你说了'在场'两个字", detail: "mentoring不是传授技巧，是传递价值观。对方眼中的困惑，你当年也有过。这是传承。", luck: {career: 83, wealth: 72, love: 78, health: 80}},
        {id: 12, level: "中吉", levelCode: "zhong-ji", title: "🌧️ 风雨之后", content: "被挑战的方案，在MDT上获得了外科主任的认可", detail: "郑主任点头的那一刻，你知道坚持有价值。证据是硬的，但传递证据需要柔软的手。", luck: {career: 81, wealth: 70, love: 75, health: 85}},
        {id: 13, level: "中吉", levelCode: "zhong-ji", title: "📖 厚积薄发", content: "整理旧文献，发现三年前忽略的重要随访数据", detail: "时间给了你礼物。那些当时看似无用的积累，现在成了关键拼图。相信陈皮的哲学。", luck: {career: 79, wealth: 74, love: 72, health: 78}},
        {id: 14, level: "小吉", levelCode: "xiao-ji", title: "📝 下马看花", content: "出差路上读完一本非专业书，意外获得新视角", detail: "跨界不是不务正业。那本草帽诗集中的某个比喻，明天可能会帮你说服一位诗人出身的主任。", luck: {career: 72, wealth: 68, love: 75, health: 80}},
        {id: 15, level: "小吉", levelCode: "xiao-ji", title: "☕ 午后闲情", content: "周教授办公室多待了一刻钟，听到一个患者故事", detail: "这不是'拜访记录'里的内容。但那个故事，会让你下周写报告时，多一分温度。", luck: {career: 70, wealth: 65, love: 78, health: 82}},
        {id: 16, level: "小吉", levelCode: "xiao-ji", title: "🎧 塞翁失马", content: "错过的航班，让你在机场安静读完那份48页的报告", detail: "延误不是灾难，是生活给你的缓冲。那些标注的疑问，明天会变成有价值的提问。", luck: {career: 74, wealth: 62, love: 70, health: 85}},
        {id: 17, level: "小吉", levelCode: "xiao-ji", title: "🌿 青梅竹马", content: "想起入行时的导师，发了一条问候消息", detail: "连接不是为了KPI。那些曾经的引路人，也值得被'在场'。文字的温暖，会双向流动。", luck: {career: 68, wealth: 70, love: 85, health: 78}},
        {id: 18, level: "小吉", levelCode: "xiao-ji", title: "🍵 粗茶淡饭", content: "自己带的便当，比外卖多了一点仪式感", detail: "照顾好自己不是自私。你是连接医生和患者的人，你的状态，会影响你传递的信息。", luck: {career: 66, wealth: 72, love: 74, health: 88}},
        {id: 19, level: "小吉", levelCode: "xiao-ji", title: "🚇 地铁观察", content: "早高峰注意到一位老人看药品说明书，你忍不住帮了他", detail: "这不是工作职责。但'在场'是一种习惯，不分场合。那个道谢的眼神，是今天的第一个琥珀。", luck: {career: 70, wealth: 68, love: 80, health: 82}},
        {id: 20, level: "小吉", levelCode: "xiao-ji", title: "📱 数字排毒", content: "睡前一小时没看工作群，睡眠质量显著提升", detail: "边界感也是专业的一部分。你不是24小时待机的AI，你需要offline来保持人的敏感。", luck: {career: 65, wealth: 66, love: 72, health: 90}},
        {id: 21, level: "小吉", levelCode: "xiao-ji", title: "📝 错题本哲学", content: "整理了一次失败的拜访，发现了三个改进点", detail: "反思不是自我否定。那些'不顺利'，往往是AI学不会的东西。记下来，这是你的独家数据。", luck: {career: 76, wealth: 64, love: 70, health: 80}},
        {id: 22, level: "平", levelCode: "ping", title: "⏳ 按辔徐行", content: "今天没有惊喜，但所有流程都顺利走完", detail: "平淡是MSL的日常。不是每一天都有洞察，但每一天的积累都在发酵。接受这种节奏。", luck: {career: 70, wealth: 70, love: 70, health: 70}},
        {id: 23, level: "平", levelCode: "ping", title: "☁️ 云卷云舒", content: "AI生成的报告，你改了一个词，让它更像人写的", detail: "微小的坚持，也是抵抗。那个词的改动，可能会让读报告的人，少一分冰冷，多一分温度。", luck: {career: 68, wealth: 68, love: 72, health: 72}},
        {id: 24, level: "平", levelCode: "ping", title: "🔄 日复一日", content: "随访了那个稳定的患者，好消息是没有坏消息", detail: "医学的常态是'没有变化'。珍惜这种平凡，它意味着someone's life is still going on。", luck: {career: 65, wealth: 70, love: 68, health: 75}},
        {id: 25, level: "平", levelCode: "ping", title: "📚 温故知新", content: "重读一篇旧文献，发现了之前没注意的方法学细节", detail: "经典值得重读。你的专业成长，就藏在这些'再读一遍'的时刻里。", luck: {career: 72, wealth: 66, love: 70, health: 72}},
        {id: 26, level: "平", levelCode: "ping", title: "🌱 静待花开", content: "种下的那盆蝴蝶兰，还没有开花的迹象", detail: "不是所有投入都有即时回报。相信时间，相信陈化。你的努力，会以意想不到的方式结果。", luck: {career: 66, wealth: 72, love: 75, health: 70}},
        {id: 27, level: "趣", levelCode: "qu", title: "😅 马失前蹄", content: "把给周教授的邮件发给了周主任，幸好内容差不多", detail: "尴尬也是连接的一部分。下次见面，这会成为一个让你们都放松的笑话。人都会犯错。", luck: {career: 60, wealth: 65, love: 85, health: 75}},
        {id: 28, level: "趣", levelCode: "qu", title: "🍜 马上就到", content: "告诉客户'五分钟到'，实际上你还在地铁上", detail: "善意的谎言，是为了给对方留准备时间。但下次，多预留十分钟吧，回南天的广州，鞋子会湿。", luck: {career: 58, wealth: 62, love: 70, health: 80}},
        {id: 29, level: "趣", levelCode: "qu", title: "🤖 AI幻觉", content: "小枢生成了一份关于'不存在的研究'的报告，你花了十分钟才发现", detail: "AI也会一本正经地胡说八道。你的价值，就是做这个验证者。质疑，是你的超能力。", luck: {career: 62, wealth: 60, love: 68, health: 85}},
        {id: 30, level: "趣", levelCode: "qu", title: "🎲 马上有钱", content: "系统Bug，你的差旅费多报了一个零，主动退回去了", detail: "诚实是最好的策略。虽然失去了'意外之财'，但获得了心安理得。这算好运吗？算。", luck: {career: 75, wealth: 55, love: 72, health: 88}}
    ];

    var isPressing = false;
    var pressTimer = null;
    var currentFortune = null;

    // 强制隐藏加载
    setTimeout(function() {
        var loading = document.getElementById('loadingScreen');
        if (loading) {
            loading.style.opacity = '0';
            loading.style.visibility = 'hidden';
            setTimeout(function() { loading.style.display = 'none'; }, 600);
        }
    }, 1500);

    function init() {
        var startBtn = document.getElementById('startBtn');
        var tubeContainer = document.getElementById('tubeContainer');
        var heroSection = document.getElementById('heroSection');
        var drawSection = document.getElementById('drawSection');
        var resultSection = document.getElementById('resultSection');
        var againBtn = document.getElementById('againBtn');

        if (!startBtn || !tubeContainer) {
            console.error('关键元素未找到');
            return;
        }

        // 开始按钮
        startBtn.addEventListener('click', function() {
            heroSection.classList.add('hidden');
            drawSection.classList.add('show');
        });

        // 长按签筒
        function startPress(e) {
            e.preventDefault();
            if (currentFortune || isPressing) return;

            isPressing = true;
            tubeContainer.classList.add('pressing');

            var pressHint = document.getElementById('pressHint');
            var progressRing = document.getElementById('progressRing');
            if (pressHint) pressHint.classList.add('hidden');
            if (progressRing) progressRing.classList.add('active');

            if (navigator.vibrate) navigator.vibrate(50);

            var progress = 0;
            var ringFill = document.getElementById('ringFill');

            pressTimer = setInterval(function() {
                progress += 0.02;
                if (ringFill) ringFill.style.strokeDashoffset = 942 - (942 * progress);
                if (progress >= 1) {
                    clearInterval(pressTimer);
                    performDraw();
                }
            }, 30);
        }

        function endPress() {
            if (!isPressing || currentFortune) return;
            clearInterval(pressTimer);
            isPressing = false;
            tubeContainer.classList.remove('pressing');

            var pressHint = document.getElementById('pressHint');
            var progressRing = document.getElementById('progressRing');
            var ringFill = document.getElementById('ringFill');

            if (pressHint) pressHint.classList.remove('hidden');
            if (progressRing) progressRing.classList.remove('active');
            if (ringFill) ringFill.style.strokeDashoffset = 942;
        }

        function performDraw() {
            currentFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
            tubeContainer.classList.remove('pressing');
            tubeContainer.classList.add('shaking');
            if (navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 100]);

            setTimeout(function() {
                tubeContainer.classList.remove('shaking');
                showResult();
            }, 1200);
        }

        function showResult() {
            drawSection.classList.remove('show');
            resultSection.classList.add('show');

            // 安全地设置内容，添加空值检查
            var badge = document.getElementById('levelBadge');
            if (badge) {
                badge.className = 'level-badge level-' + currentFortune.levelCode;
                var badgeText = badge.querySelector('.badge-text');
                if (badgeText) {
                    badgeText.textContent = currentFortune.level;
                } else {
                    badge.textContent = currentFortune.level;
                }
            }

            var fortuneNumber = document.getElementById('fortuneNumber');
            var fortuneTitle = document.getElementById('fortuneTitle');
            var fortuneContent = document.getElementById('fortuneContent');
            var fortuneDetail = document.getElementById('fortuneDetail');
            var luckMeter = document.getElementById('luckMeter');

            if (fortuneNumber) fortuneNumber.textContent = '第 ' + currentFortune.id + ' 签';
            if (fortuneTitle) fortuneTitle.textContent = currentFortune.title;
            if (fortuneContent) fortuneContent.textContent = currentFortune.content;
            if (fortuneDetail) fortuneDetail.textContent = currentFortune.detail;

            if (luckMeter) {
                var luckLabels = ['事业', '财运', '人际', '健康'];
                var luckKeys = ['career', 'wealth', 'love', 'health'];
                var luckColors = ['#C5504B', '#E8843C', '#D4A574', '#5B8A72'];

                var html = '';
                for (var i = 0; i < luckLabels.length; i++) {
                    html += '<div class="luck-item"><div class="luck-label">' + luckLabels[i] + '</div>';
                    html += '<div class="luck-value" style="color:' + luckColors[i] + '">' + currentFortune.luck[luckKeys[i]] + '</div></div>';
                }
                luckMeter.innerHTML = html;
            }

            console.log('✅ 显示签文:', currentFortune.title);
        }

        // 再抽一次
        if (againBtn) {
            againBtn.addEventListener('click', function() {
                currentFortune = null;
                var ringFill = document.getElementById('ringFill');
                if (ringFill) ringFill.style.strokeDashoffset = 942;
                resultSection.classList.remove('show');
                drawSection.classList.add('show');

                var progressRing = document.getElementById('progressRing');
                var pressHint = document.getElementById('pressHint');
                if (progressRing) progressRing.classList.remove('active');
                if (pressHint) pressHint.classList.remove('hidden');
            });
        }

        // 绑定事件
        tubeContainer.addEventListener('touchstart', startPress, {passive: false});
        tubeContainer.addEventListener('mousedown', startPress);
        tubeContainer.addEventListener('touchend', endPress);
        tubeContainer.addEventListener('mouseup', endPress);
        tubeContainer.addEventListener('mouseleave', endPress);

        console.log('✅ 运势签初始化完成');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
