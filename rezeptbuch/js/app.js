let currentLang='zh-Hant',currentCat='all',previousCat='all',currentIdx=null;
const CAT_ORDER=['all','bread','pasta','meat','soup','baking','dessert','drinks'];
function t(k){return I18N[currentLang][k]||k}
function setLang(lang){
  currentLang=lang;
  const map={'zh-Hant':'hant','zh-Hans':'hans',de:'de',en:'en'};
  Object.values(map).forEach(id=>document.getElementById('lb-'+id).classList.remove('active'));
  document.getElementById('lb-'+map[lang]).classList.add('active');
  ['lh','sn','sbhd','tl','tdn','ht','hs','hc','srl','sll','scl'].forEach(id=>{
    const el=document.getElementById(id);
    if(!el)return;
    const key={lh:'home',sn:'sn',sbhd:'sbhd',tl:'timer',tdn:'done',ht:'ht',hs:'hs',hc:'hc',srl:'srl',sll:'sll',scl:'scl'}[id];
    el.textContent=t(key);
  });
  document.getElementById('hm').innerHTML=t('hm');
  document.getElementById('stot').textContent=RECIPES.length;
  document.getElementById('si').placeholder=t('search');
  document.getElementById('lb2').textContent=t('back');
  renderSidebar();
  if(document.getElementById('pl').style.display!=='none')renderList();
  if(document.getElementById('pd').style.display!=='none'&&currentIdx!==null)renderDetail(currentIdx);
}
function catCount(cat){return cat==='all'?RECIPES.length:RECIPES.filter(r=>r[0]===cat).length}
function renderSidebar(){
  document.getElementById('cl').innerHTML=CAT_ORDER.map(cat=>{
    const info=t('cats')[cat];
    return`<button class="cb ${currentCat===cat?'active':''}" onclick="selectCat('${cat}')"><span class="ci">${info.i}</span><span>${info.l}</span><span class="cc">${catCount(cat)}</span></button>`;
  }).join('');
}
function selectCat(cat){currentCat=cat;closeMobileSidebar();showList(cat)}
function showHome(){document.getElementById('ph').style.display='flex';document.getElementById('pl').style.display='none';document.getElementById('pd').style.display='none'}
function showList(cat){
  if(cat!==null)currentCat=cat;
  renderSidebar();renderList();
  document.getElementById('ph').style.display='none';
  document.getElementById('pl').style.display='block';
  document.getElementById('pd').style.display='none';
}
function showDetail(idx){
  previousCat=currentCat;currentIdx=idx;renderDetail(idx);
  document.getElementById('ph').style.display='none';
  document.getElementById('pl').style.display='none';
  document.getElementById('pd').style.display='block';
  window.scrollTo(0,0);
}
function goBack(){showList(previousCat)}
function renderList(){
  const query=document.getElementById('si').value.trim().toLowerCase();
  const catInfo=t('cats')[currentCat];
  document.getElementById('li').textContent=catInfo.i;
  document.getElementById('lhd').textContent=catInfo.l;
  const filtered=RECIPES.filter(r=>{
    const d=r[3][currentLang];if(!d)return false;
    if(currentCat!=='all'&&r[0]!==currentCat)return false;
    if(query){const h=(d.t+' '+(d.d||'')+' '+d.z.map(z=>z[1]).join(' ')).toLowerCase();if(!h.includes(query))return false}
    return true;
  });
  document.getElementById('lct').textContent=t('found')(filtered.length);
  const grid=document.getElementById('rg');
  if(!filtered.length){grid.innerHTML=`<div class="emp">${t('empty')}</div>`;return}
  grid.innerHTML=filtered.map(r=>{
    const d=r[3][currentLang],idx=RECIPES.indexOf(r);
    return`<div class="rc" tabindex="0" role="button" onclick="showDetail(${idx})" onkeydown="if(event.key==='Enter')showDetail(${idx})"><div class="ri">${r[1]}</div><div class="rt">${d.t}</div><div class="rm"><span>${r[2]} ${t('port')}</span><span>${d.s.length} ${t('steps')}</span></div><div class="ra">↗</div></div>`;
  }).join('');
}
function renderDetail(idx){
  const r=RECIPES[idx],d=r[3][currentLang],catInfo=t('cats')[r[0]];
  document.getElementById('di').textContent=r[1];
  document.getElementById('dt').textContent=d.t;
  document.getElementById('dd').textContent=d.d||'';
  document.getElementById('dm').innerHTML=`<span>${r[2]} ${t('port')}</span><span>${d.s.length} ${t('steps')}</span><span>${catInfo.i} ${catInfo.l}</span>`;
  document.getElementById('dit').textContent=t('ing');
  document.getElementById('dst').textContent=t('prep');
  document.getElementById('dnt').textContent=t('notes');
  document.getElementById('dil').innerHTML=d.z.map(([amount,name])=>!name?`<li class="ish">${amount}</li>`:`<li class="ir"><span>${name}</span><span class="ia">${amount}</span></li>`).join('');
  document.getElementById('dsl').innerHTML=d.s.map(([title,text,secs],i)=>`<li class="sr"><div class="snb">${i+1}</div><div class="sc"><div class="stt">${title}</div><div class="sb2">${text}</div>${secs>0?`<button class="stb" onclick="startTimer(${secs},'${title}')">⏱ ${fmt(secs)}</button>`:''}</div></li>`).join('');
  const ns=document.getElementById('dns');
  if(d.n){ns.style.display='block';document.getElementById('dn').textContent=d.n}else{ns.style.display='none'}
}
function closeMobileSidebar(){document.getElementById('sb').classList.remove('open');document.getElementById('sov').classList.remove('open')}
document.getElementById('stog').addEventListener('click',()=>{document.getElementById('sb').classList.toggle('open');document.getElementById('sov').classList.toggle('open')});
document.getElementById('sov').addEventListener('click',closeMobileSidebar);
document.getElementById('si').addEventListener('input',()=>{if(document.getElementById('pl').style.display!=='none')renderList()});
setLang('zh-Hant');showHome();
