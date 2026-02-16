// MSL 千里马运势签 - 华丽版脚本

// ========== 30条完整签文数据 ==========
const fortunes = [
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

// ========== 状态管理 ==========
const state = {
    isPressing: false,
    pressProgress: 0,
    pressTimer: null,
    currentFortune: null,
    isAnimating: false
};

// ========== DOM 元素 ==========
const elements = {
    loadingScreen: document.getElementById('loadingScreen'),
    particleCanvas: document.getElementById('particleCanvas'),
    heroSection: document.getElementById('heroSection'),
    drawSection: document.getElementById('drawSection'),
    resultSection: document.getElementById('resultSection'),
    startBtn: document.getElementById('startBtn'),
    tubeContainer: document.getElementById('tubeContainer'),
    tubeWrapper: document.getElementById('tubeWrapper'),
    progressRing: document.getElementById('progressRing'),
    ringFill: document.getElementById('ringFill'),
    pressHint: document.getElementById('pressHint'),
    resultCard: document.getElementById('resultCard'),
    levelBadge: document.getElementById('levelBadge'),
    fortuneNumber: document.getElementById('fortuneNumber'),
    fortuneTitle: document.getElementById('fortuneTitle'),
    fortuneContent: document.getElementById('fortuneContent'),
    fortuneDetail: document.getElementById('fortuneDetail'),
    luckMeter: document.getElementById('luckMeter'),
    saveBtn: document.getElementById('saveBtn'),
    againBtn: document.getElementById('againBtn'),
    shareTip: document.getElementById('shareTip'),
    generating: document.getElementById('generating'),
    shareCanvas: document.getElementById('shareCanvas')
};

// ========== 粒子背景 ==========
function initParticles() {
    try {
        const canvas = elements.particleCanvas;
        if (!canvas || !canvas.getContext) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize, { passive: true });

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 25 : 40;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2,
            color: Math.random() > 0.5 ? '#D4A574' : '#C5504B'
        });
    }

    let frameCount = 0;
    function animate() {
        frameCount++;
        if (frameCount % 2 === 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.fill();
            });

            ctx.globalAlpha = 1;
        }

        requestAnimationFrame(animate);
    }
    animate();
    } catch (error) {
        console.error('粒子背景初始化失败:', error);
    }
}

// ========== 加载动画 ==========
function hideLoading() {
    // 确保即使出错也能隐藏加载屏幕
    setTimeout(() => {
        if (elements.loadingScreen) {
            elements.loadingScreen.classList.add('hidden');
        }
    }, 1500);

    // 后备机制：2秒后强制隐藏
    setTimeout(() => {
        if (elements.loadingScreen) {
            elements.loadingScreen.style.display = 'none';
        }
    }, 2000);
}

// ========== 页面切换 ==========
function showDrawSection() {
    elements.heroSection.classList.add('hidden');
    elements.drawSection.classList.add('show');
}

function showResultSection() {
    elements.drawSection.classList.remove('show');
    elements.resultSection.classList.add('show');
}

function resetToDraw() {
    state.currentFortune = null;
    state.pressProgress = 0;
    elements.ringFill.style.strokeDashoffset = 942;

    elements.resultSection.classList.remove('show');
    elements.drawSection.classList.add('show');
    elements.progressRing.classList.remove('active');
    elements.pressHint.classList.remove('hidden');
}

// ========== 抽签逻辑 ==========
function drawFortune() {
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}

function handlePressStart(e) {
    e.preventDefault();
    if (state.currentFortune || state.isPressing || state.isAnimating) return;

    state.isPressing = true;
    state.pressProgress = 0;

    elements.tubeContainer.classList.add('pressing');
    elements.progressRing.classList.add('active');
    elements.pressHint.classList.add('hidden');

    if (navigator.vibrate) {
        navigator.vibrate(50);
    }

    state.pressTimer = setInterval(() => {
        state.pressProgress += 0.02;
        const offset = 942 - (942 * state.pressProgress);
        elements.ringFill.style.strokeDashoffset = offset;

        if (state.pressProgress >= 1) {
            clearInterval(state.pressTimer);
            performDraw();
        }
    }, 30);
}

function handlePressEnd() {
    if (!state.isPressing || state.currentFortune) return;

    clearInterval(state.pressTimer);
    state.isPressing = false;
    elements.tubeContainer.classList.remove('pressing');

    if (state.pressProgress < 0.8) {
        state.pressProgress = 0;
        elements.ringFill.style.strokeDashoffset = 942;
        elements.progressRing.classList.remove('active');
        elements.pressHint.classList.remove('hidden');
    }
}

function performDraw() {
    state.isAnimating = true;
    state.currentFortune = drawFortune();

    elements.tubeContainer.classList.remove('pressing');
    elements.tubeContainer.classList.add('shaking');

    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100, 50, 100, 50, 100]);
    }

    setTimeout(() => {
        elements.tubeContainer.classList.remove('shaking');
        state.isAnimating = false;
        showResult();
    }, 1200);
}

// ========== 显示结果 ==========
function showResult() {
    const fortune = state.currentFortune;

    elements.levelBadge.className = `level-badge level-${fortune.levelCode}`;
    elements.levelBadge.querySelector('.badge-text').textContent = fortune.level;
    elements.fortuneNumber.textContent = `第 ${fortune.id} 签`;
    elements.fortuneTitle.textContent = fortune.title;
    elements.fortuneContent.textContent = fortune.content;
    elements.fortuneDetail.textContent = fortune.detail;

    const luckLabels = ['事业', '财运', '人际', '健康'];
    const luckKeys = ['career', 'wealth', 'love', 'health'];
    const luckColors = ['#C5504B', '#E8843C', '#D4A574', '#5B8A72'];

    elements.luckMeter.innerHTML = luckLabels.map((label, i) => `
        <div class="luck-item" style="--luck-color: ${luckColors[i]}">
            <div class="luck-label">${label}</div>
            <div class="luck-value" style="color: ${luckColors[i]}">${fortune.luck[luckKeys[i]]}</div>
        </div>
    `).join('');

    showResultSection();
}

// ========== 生成分享图片 ==========
function generateShareImage() {
    elements.generating.classList.add('show');

    const canvas = elements.shareCanvas;
    const ctx = canvas.getContext('2d');
    const fortune = state.currentFortune;

    // 背景
    const bgGradient = ctx.createLinearGradient(0, 0, 0, 1334);
    bgGradient.addColorStop(0, '#FDF8F3');
    bgGradient.addColorStop(0.5, '#F9F1E8');
    bgGradient.addColorStop(1, '#FDF8F3');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 750, 1334);

    // 祥云装饰图案
    ctx.fillStyle = 'rgba(212, 165, 116, 0.1)';
    for (let i = 0; i < 8; i++) {
        const x = Math.random() * 750;
        const y = Math.random() * 1334;
        const size = 50 + Math.random() * 100;
        drawCloud(ctx, x, y, size);
    }

    // 顶部装饰线
    ctx.strokeStyle = '#D4A574';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(100, 80);
    ctx.lineTo(650, 80);
    ctx.stroke();

    // 年份标签
    ctx.fillStyle = '#C5504B';
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🐎 2026 马年', 375, 140);

    // 标题
    ctx.fillStyle = '#3D2817';
    ctx.font = 'bold 52px sans-serif';
    ctx.fillText('MSL千里马运势签', 375, 220);

    ctx.fillStyle = '#8B7355';
    ctx.font = '26px sans-serif';
    ctx.fillText('专为医药MSL定制的新年运势', 375, 270);

    // 卡片背景
    ctx.fillStyle = '#FFFFFF';
    roundRect(ctx, 60, 320, 630, 720, 24);
    ctx.fill();

    // 卡片边框
    ctx.strokeStyle = 'rgba(212, 165, 116, 0.3)';
    ctx.lineWidth = 2;
    roundRect(ctx, 60, 320, 630, 720, 24);
    ctx.stroke();

    // 装饰边角
    drawCornerDecoration(ctx, 60, 320, 80);
    drawCornerDecoration(ctx, 610, 320, 80, true);
    drawCornerDecoration(ctx, 60, 960, 80, false, true);
    drawCornerDecoration(ctx, 610, 960, 80, true, true);

    // 等级标签
    const colors = {
        '大吉': '#C5504B',
        '中吉': '#E8843C',
        '小吉': '#D4A574',
        '平': '#8B7355',
        '趣': '#5B8A72'
    };

    ctx.fillStyle = colors[fortune.level] || '#8B7355';
    roundRect(ctx, 520, 295, 130, 55, 27);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.font = 'bold 30px sans-serif';
    ctx.fillText(fortune.level, 585, 333);

    // 签号
    ctx.fillStyle = '#8B7355';
    ctx.font = '24px sans-serif';
    ctx.fillText(`第 ${fortune.id} 签`, 375, 400);

    // 签名
    ctx.fillStyle = '#3D2817';
    ctx.font = 'bold 44px sans-serif';
    ctx.fillText(fortune.title, 375, 480);

    // 分隔线
    ctx.strokeStyle = 'rgba(212, 165, 116, 0.4)';
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.moveTo(120, 530);
    ctx.lineTo(630, 530);
    ctx.stroke();
    ctx.setLineDash([]);

    // 签文内容背景
    ctx.fillStyle = '#FDF8F3';
    roundRect(ctx, 100, 560, 550, 140, 16);
    ctx.fill();

    // 签文内容
    ctx.fillStyle = '#3D2817';
    ctx.font = '32px sans-serif';
    wrapText(ctx, fortune.content, 375, 620, 480, 48);

    // 详解
    ctx.fillStyle = '#8B7355';
    ctx.font = '24px sans-serif';
    wrapText(ctx, fortune.detail, 375, 740, 520, 40);

    // 分隔线
    ctx.strokeStyle = 'rgba(212, 165, 116, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(100, 900);
    ctx.lineTo(650, 900);
    ctx.stroke();

    // 运势标题
    ctx.fillStyle = '#8B7355';
    ctx.font = '22px sans-serif';
    ctx.fillText('运势指数', 375, 945);

    // 运势数值
    const luckLabels = ['事业', '财运', '人际', '健康'];
    const luckKeys = ['career', 'wealth', 'love', 'health'];
    const luckColors = ['#C5504B', '#E8843C', '#D4A574', '#5B8A72'];

    luckLabels.forEach((label, i) => {
        const x = 140 + i * 155;

        ctx.fillStyle = '#8B7355';
        ctx.font = '20px sans-serif';
        ctx.fillText(label, x, 995);

        ctx.fillStyle = luckColors[i];
        ctx.font = 'bold 42px sans-serif';
        ctx.fillText(fortune.luck[luckKeys[i]], x, 1050);
    });

    // 吉祥物
    ctx.font = '60px sans-serif';
    ctx.fillText('🐎', 120, 1020);

    // 底部装饰线
    ctx.strokeStyle = '#D4A574';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 1120);
    ctx.lineTo(650, 1120);
    ctx.stroke();

    // 底部提示
    ctx.fillStyle = '#8B7355';
    ctx.font = '24px sans-serif';
    ctx.fillText('扫描二维码，抽取你的马年运势', 375, 1180);

    ctx.fillStyle = '#A89080';
    ctx.font = '20px sans-serif';
    ctx.fillText('仅供娱乐 · 新春运势 · MSL琥珀光', 375, 1220);

    // 保存图片
    setTimeout(() => {
        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `MSL千里马运势签-${fortune.level}-${fortune.id}.png`;
            a.click();
            URL.revokeObjectURL(url);

            elements.generating.classList.remove('show');
        });
    }, 200);
}

// ========== 辅助函数 ==========
function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const chars = text.split('');
    let line = '';
    let testY = y;

    for (let n = 0; n < chars.length; n++) {
        const testLine = line + chars[n];
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, testY);
            line = chars[n];
            testY += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, testY);
}

function drawCloud(ctx, x, y, size) {
    ctx.beginPath();
    ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
    ctx.arc(x + size * 0.3, y - size * 0.2, size * 0.4, 0, Math.PI * 2);
    ctx.arc(x + size * 0.5, y, size * 0.35, 0, Math.PI * 2);
    ctx.arc(x + size * 0.2, y + size * 0.2, size * 0.35, 0, Math.PI * 2);
    ctx.fill();
}

function drawCornerDecoration(ctx, x, y, size, flipX = false, flipY = false) {
    ctx.save();
    ctx.translate(x + (flipX ? size : 0), y + (flipY ? size : 0));
    ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);

    ctx.strokeStyle = '#D4A574';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.quadraticCurveTo(0, 0, 20, 0);
    ctx.lineTo(size * 0.6, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(15, 15, 8, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
}

// ========== 初始化 ==========
function init() {
    // 初始化粒子背景
    initParticles();

    // 隐藏加载动画
    hideLoading();

    // 开始按钮
    elements.startBtn.addEventListener('click', showDrawSection);

    // 签筒交互
    elements.tubeContainer.addEventListener('touchstart', handlePressStart, { passive: false });
    elements.tubeContainer.addEventListener('mousedown', handlePressStart);
    elements.tubeContainer.addEventListener('touchend', handlePressEnd);
    elements.tubeContainer.addEventListener('mouseup', handlePressEnd);
    elements.tubeContainer.addEventListener('mouseleave', handlePressEnd);

    // 按钮事件
    elements.againBtn.addEventListener('click', resetToDraw);
    elements.saveBtn.addEventListener('click', generateShareImage);

    // 防止页面滚动
    document.addEventListener('touchmove', function(e) {
        if (e.target.closest('.tube-container')) {
            e.preventDefault();
        }
    }, { passive: false });

    console.log('🐎 MSL千里马运势签 - 华丽版已加载');
    console.log('✨ 共收录', fortunes.length, '支签文');
}

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error('初始化失败:', error);
        // 即使出错也隐藏加载屏幕
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }
});

// 全局错误处理
window.addEventListener('error', (e) => {
    console.error('发生错误:', e.error);
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }
});
