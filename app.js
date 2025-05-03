let q=[];fetch('questions_1_80.json').then(r=>r.json()).then(d=>{q=d;ready();});
const map={IE:{A:'I',B:'E'},SM:{A:'S',B:'M'},TG:{A:'T',B:'G'},CH:{A:'C',B:'H'}};
let i=0,score={I:0,E:0,S:0,M:0,T:0,G:0,C:0,H:0};
const $=id=>document.getElementById(id);
function ready(){$('start').onclick=start;}
function start(){$('welcome').classList.add('hide');$('quiz').classList.remove('hide');render();}
function render(){const k=q[i];$('title').textContent=`第 ${i+1}/80 题 · ${k.text}`;$('optA').textContent=k.A;$('optB').textContent=k.B;$('optA').onclick=()=>choose('A');$('optB').onclick=()=>choose('B');$('bar').style.width=((i/80)*100)+'%';}
function choose(c){const l=map[q[i].dimension][c];score[l]++;i++;i<q.length?render():finish();}
function finish(){$('quiz').classList.add('hide');$('result').classList.remove('hide');$('code').textContent='完成';$('score').textContent=JSON.stringify(score,null,2);}
