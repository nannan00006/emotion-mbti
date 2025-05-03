let questions=[];
fetch('questions_1_80.json').then(r=>r.json()).then(d=>{questions=d;init();});

const mapDim={IE:{A:'I',B:'E'},SM:{A:'S',B:'M'},TG:{A:'T',B:'G'},CH:{A:'C',B:'H'}};
const desc={ISTC:'控制型孤狼：沉默而具掌控欲，先靠近后抽离。',ISTH:'掌控型稳定者：内敛理智，按自己节奏推进关系。',ISGC:'忍耐型爆弹：默默付出，压抑委屈后易爆发。',ISGH:'可靠老实人：细水长流，稳定付出。',IMTC:'情感黑洞：少回应多索取，持续消耗他人能量。',IMTH:'冷淡老年人：低反应、情感表现稀薄。',IMGC:'隐性讨好者：渴望被喜欢缺自信，易被操控。',IMGH:'安全感吸血鬼：外表安静，实则高度依赖。',ESTC:'爱情捕食者：热情快进快退，擅操控情绪。',ESTH:'情绪管理员：会给会要，掌控关系走向。',ESGC:'戏精公主/王子：情绪多变，关注度高但稳定。',ESGH:'外向圣人：热情慷慨且有边界。',EMTC:'甜蜜陷阱：亲和却浅投入，吸引力强。',EMTH:'依赖型小孩：外向脆弱，需要情绪托管。',EMGC:'口是心非王：社交能手，负情绪多，反复横跳。',EMGH:'和平型陪伴者：好相处不冲突，恋爱易平淡.'};

let i=0,tally={I:0,E:0,S:0,M:0,T:0,G:0,C:0,H:0};
const $=id=>document.getElementById(id);

function init(){$('startBtn').onclick=start;}
function start(){toggle('welcome','quiz');render();}
function render(){const q=questions[i];$('qTitle').textContent=`第 ${i+1}/80 题 · ${q.text}`;$('btnA').textContent='A. '+q.A;$('btnB').textContent='B. '+q.B;$('btnA').onclick=()=>choose('A');$('btnB').onclick=()=>choose('B');$('bar').style.width=((i/80)*100)+'%';}
function choose(opt){const letter=mapDim[questions[i].dimension][opt];tally[letter]++;i++;i<questions.length?render():finish();}
function finish(){toggle('quiz','result');const code=(tally.I>tally.E?'I':'E')+(tally.S>tally.M?'S':'M')+(tally.T>tally.G?'T':'G')+(tally.C>tally.H?'C':'H');$('typeCode').textContent=code;$('typeDesc').textContent=desc[code]||'';$('scoreBox').textContent=`I:${tally.I}  E:${tally.E}\nS:${tally.S}  M:${tally.M}\nT:${tally.T}  G:${tally.G}\nC:${tally.C}  H:${tally.H}`;}
function toggle(h,s){$(h).classList.add('hidden');$(s).classList.remove('hidden');}
