const typeDesc = {
  ISTC:'控制型孤狼：沉默而具掌控欲，先靠近后抽离。',
  ISTH:'掌控型稳定者：内敛理智，按自己节奏推进关系。',
  ISGC:'忍耐型爆弹：默默付出，压抑委屈后易爆发。',
  ISGH:'可靠老实人：细水长流，稳定付出。',
  IMTC:'情感黑洞：少回应多索取，持续消耗他人能量。',
  IMTH:'冷淡老年人：低反应、情感表现稀薄。',
  IMGC:'隐性讨好者：渴望被喜欢却缺乏自信，易被操控。',
  IMGH:'安全感吸血鬼：外表安静，实则高度依赖。',
  ESTC:'爱情捕食者：热情快进快退，擅操控情绪。',
  ESTH:'情绪管理员：会给会要，掌控关系走向。',
  ESGC:'戏精公主/王子：情绪多变，关注度高但稳定性差。',
  ESGH:'外向圣人：热情慷慨且有边界感。',
  EMTC:'甜蜜陷阱：亲和却浅投入，吸引力强。',
  EMTH:'依赖型小孩：外向脆弱，需要情绪托管。',
  EMGC:'口是心非王：社交能手，负情绪多，反复横跳。',
  EMGH:'和平型陪伴者：好相处不冲突，恋爱易平淡。'
};

let q=[];fetch('questions_1_80.json').then(r=>r.json()).then(d=>{q=d;ready();});
const map={IE:{A:'I',B:'E'},SM:{A:'S',B:'M'},TG:{A:'T',B:'G'},CH:{A:'C',B:'H'}};
let i=0,score={I:0,E:0,S:0,M:0,T:0,G:0,C:0,H:0};
const $=id=>document.getElementById(id);
function ready(){$('start').onclick=start;}
function start(){$('welcome').classList.add('hide');$('quiz').classList.remove('hide');render();}
function render(){const k=q[i];$('title').textContent=`第 ${i+1}/80 题 · ${k.text}`;$('optA').textContent=k.A;$('optB').textContent=k.B;$('optA').onclick=()=>choose('A');$('optB').onclick=()=>choose('B');$('bar').style.width=((i/80)*100)+'%';}
function choose(c){const l=map[q[i].dimension][c];score[l]++;i++;i<q.length?render():finish();}
function finish(){$('quiz').classList.add('hide');$('result').classList.remove('hide');$('code').textContent='完成';$('score').textContent=JSON.stringify(score,null,2);}

function finish(){
  toggle('quiz','result');

  // ① 计算四维
  const code =
    (score.I > score.E ? 'I' : 'E') +
    (score.S > score.M ? 'S' : 'M') +
    (score.T > score.G ? 'T' : 'G') +
    (score.C > score.H ? 'C' : 'H');

  // ② 显示类型和解释
  $('code').textContent = code;
  $('score').textContent = typeDesc[code] + '\\n\\n' +
     `I:${score.I}  E:${score.E}\\n` +
     `S:${score.S}  M:${score.M}\\n` +
     `T:${score.T}  G:${score.G}\\n` +
     `C:${score.C}  H:${score.H}`;
}

