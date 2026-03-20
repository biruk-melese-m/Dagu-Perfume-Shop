// ── CURSOR ──────────────────────────────────────────────────────
const cur=document.getElementById('cur'),cur2=document.getElementById('cur2');
let mx=0,my=0,fx=0,fy=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
(function a(){fx+=(mx-fx)*.1;fy+=(my-fy)*.1;cur2.style.left=fx+'px';cur2.style.top=fy+'px';requestAnimationFrame(a);})();
document.addEventListener('mouseover',e=>{if(e.target.closest('button,a,.pcard,.snav-item,.pill'))document.body.classList.add('hov');});
document.addEventListener('mouseout',e=>{if(e.target.closest('button,a,.pcard,.snav-item,.pill'))document.body.classList.remove('hov');});

// ── PRELOADER ──────────────────────────────────────────────────
setTimeout(()=>{document.getElementById('preloader').classList.add('ready');},200);
setTimeout(()=>{document.getElementById('preloader').classList.add('out');},2000);
setTimeout(()=>{document.getElementById('preloader').style.display='none';},3200);

// ── HEADER SCROLL ──────────────────────────────────────────────
window.addEventListener('scroll',()=>{
  document.getElementById('mainHeader').classList.toggle('scrolled',window.scrollY>80);
},{passive:true});

// ── HERO CANVAS ────────────────────────────────────────────────
(function(){
  const cv=document.getElementById('heroCanvas');
  const ctx=cv.getContext('2d');
  let W,H;
  const resize=()=>{W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;};
  resize(); window.addEventListener('resize',resize);
  let mouseX=W/2,mouseY=H/2;
  document.getElementById('hero').addEventListener('mousemove',e=>{mouseX=e.clientX;mouseY=e.clientY;});
  const particles=Array.from({length:60},()=>({
    x:Math.random(),y:Math.random()*1.2,vy:-(Math.random()*.5+.2),
    vx:(Math.random()-.5)*.15,r:Math.random()*2+.3,
    life:Math.random(),gold:Math.random()<.25
  }));
  let t=0;
  const drawBottle=(cx,cy,s,a)=>{
    ctx.save();ctx.globalAlpha=a;ctx.translate(cx,cy);
    const g=ctx.createLinearGradient(-s*.4,-s,s*.4,s);
    g.addColorStop(0,'rgba(200,160,80,.4)');
    g.addColorStop(.5,'rgba(110,19,36,.15)');
    g.addColorStop(1,'rgba(200,160,80,.2)');
    ctx.fillStyle=g;
    ctx.beginPath();
    ctx.moveTo(-s*.22,-s*.6);ctx.bezierCurveTo(-s*.25,-s*.5,-s*.35,-s*.3,-s*.35,s*.15);
    ctx.bezierCurveTo(-s*.35,s*.55,-s*.22,s*.65,0,s*.65);
    ctx.bezierCurveTo(s*.22,s*.65,s*.35,s*.55,s*.35,s*.15);
    ctx.bezierCurveTo(s*.35,-s*.3,s*.25,-s*.5,s*.22,-s*.6);ctx.closePath();ctx.fill();
    ctx.strokeStyle=`rgba(200,160,80,${a*.5})`;ctx.lineWidth=.7;ctx.stroke();
    ctx.beginPath();ctx.moveTo(-s*.22,-s*.6);ctx.lineTo(-s*.14,-s*.82);ctx.lineTo(-s*.08,-s*.9);
    ctx.lineTo(s*.08,-s*.9);ctx.lineTo(s*.14,-s*.82);ctx.lineTo(s*.22,-s*.6);
    ctx.strokeStyle=`rgba(200,160,80,${a*.35})`;ctx.stroke();
    ctx.restore();
  };
  const draw=()=>{
    ctx.clearRect(0,0,W,H);
    const bg=ctx.createRadialGradient(W*.5,H*.4,0,W*.5,H*.4,W*.7);
    bg.addColorStop(0,'rgba(110,19,36,.08)');bg.addColorStop(1,'rgba(14,6,8,0)');
    ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
    particles.forEach(p=>{
      p.x+=p.vx*.001;p.y+=p.vy*.001;p.life+=.003;
      if(p.y<-.1){p.y=1.1;p.x=Math.random();}
      const alpha=p.life%1;const fade=alpha<.1?alpha*10:alpha>.8?(1-alpha)*5:1;
      ctx.beginPath();ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2);
      ctx.fillStyle=p.gold?`rgba(200,160,80,${fade*.5})`:`rgba(110,19,36,${fade*.4})`;
      ctx.fill();
    });
    const fl=Math.sin(t*.008)*14;
    const mx2=(mouseX/W-.5),my2=(mouseY/H-.5);
    drawBottle(W*.5+mx2*25,H*.44+fl+my2*18,Math.min(W,H)*.26,.9);
    drawBottle(W*.22+mx2*12,H*.5+fl*.6,Math.min(W,H)*.13,.28);
    drawBottle(W*.78+mx2*16,H*.48-fl*.4,Math.min(W,H)*.14,.24);
    t++;requestAnimationFrame(draw);
  };
  draw();
})();

// ── DATA ────────────────────────────────────────────────────────
const BOTTLE_IMGS={
  fresh:'🌊',floral:'🌸',woody:'🪵',oud:'🕌',sweet:'🍯',
  spicy:'🌶️',oriental:'🌙',leather:'🧥',fruity:'🍑',gourmand:'🍫',aquatic:'🌊',misc:'🎁'
};
function getEmoji(tags,gender){
  if(tags.includes('oud'))return'🕌';
  if(tags.includes('floral')&&gender==='w')return'🌸';
  if(tags.includes('gourmand'))return'🍫';
  if(tags.includes('fresh')&&tags.includes('aquatic'))return'🌊';
  if(tags.includes('woody'))return'🪵';
  if(tags.includes('sweet'))return'🍯';
  if(tags.includes('fruity'))return'🍑';
  if(tags.includes('spicy'))return'🌶️';
  if(gender==='m')return'🏺';
  if(gender==='w')return'🌺';
  return'🫧';
}
const SEC_COLORS={
  'sec-kings':'rgba(74,100,160,.25)',
  'sec-queens':'rgba(160,60,100,.25)',
  'sec-oud':'rgba(160,120,40,.25)',
  'sec-fresh':'rgba(40,140,160,.25)',
  'sec-woody':'rgba(120,80,40,.25)',
  'sec-sweet':'rgba(160,100,40,.25)',
  'sec-unisex':'rgba(60,140,80,.25)',
  'sec-designer':'rgba(160,140,60,.25)',
  'sec-sets':'rgba(100,60,140,.25)',
};

const SECTIONS=[
  {id:'sec-kings',emoji:'👑',tag:"Men's Collection",title:'For Kings',sub:'Bold, commanding and unforgettable — the finest men\'s fragrances from beast-mode Lattafas to iconic designer originals.'},
  {id:'sec-queens',emoji:'🌹',tag:"Women's Collection",title:'For Queens',sub:'From dreamy florals to addictive gourmands — every scent a statement of elegance and confidence.'},
  {id:'sec-oud',emoji:'🕌',tag:'Oud & Arabian',title:'Oud & Arabian Treasures',sub:'Deep resins, smoky amber, and centuries of Middle Eastern perfumery tradition.'},
  {id:'sec-fresh',emoji:'🌊',tag:'Fresh & Aquatic',title:'Fresh & Aquatic',sub:'Clean, crisp, and alive — perfect for daily wear, warm days, and effortless confidence.'},
  {id:'sec-woody',emoji:'🪵',tag:'Woody & Leather',title:'Woody & Leathery',sub:'Rich sandalwood, smoky vetiver, and raw leather — scents that leave a lasting trail.'},
  {id:'sec-sweet',emoji:'🍯',tag:'Sweet & Gourmand',title:'Sweet & Gourmand',sub:'Vanilla, caramel, cocoa and sugar rush — the most addictive and crowd-pleasing profiles.'},
  {id:'sec-unisex',emoji:'⚖️',tag:'Iconic Unisex',title:'Iconic Unisex',sub:'Timeless signatures that transcend gender — worn by everyone, remembered by all.'},
  {id:'sec-designer',emoji:'💎',tag:'Designer Originals & Testers',title:'Designer Originals',sub:'Authentic originals and testers from Chanel, Dior, Tom Ford, YSL and more — the real deal.'},
  {id:'sec-sets',emoji:'🎁',tag:'Sets, Splashes & More',title:'Sets, Splashes & Extras',sub:'Gift sets, body splashes, mini vials, kids perfumes and budget daily-wear picks.'},
];

const ALL=[
  // KINGS
  {no:1,brand:'Lattafa',name:'Asad Black',vibe:'Dior Sauvage Elixir clone — spicy, smoky, magnetic beast mode.',g:'m',size:'100ml',price:'4,500–5,999',tags:['spicy','woody','fresh'],sec:'sec-kings'},
  {no:2,brand:'Lattafa',name:'Asad Bourbon',vibe:'Azzaro The Most Wanted clone — woody spice, warm whiskey leather.',g:'m',size:'100ml',price:'6,999',tags:['woody','spicy'],sec:'sec-kings'},
  {no:3,brand:'Lattafa',name:'Asad Zanzibar',vibe:'Paco Rabanne Invictus Parfum clone — tropical fresh power.',g:'m',size:'100ml',price:'6,999',tags:['fresh','woody'],sec:'sec-kings'},
  {no:15,brand:'Lattafa',name:'Fakhar Black',vibe:'YSL Y EDP clone — fresh iris, ginger and cedar masculinity.',g:'m',size:'100ml',price:'6,500',tags:['fresh','woody'],sec:'sec-kings'},
  {no:18,brand:'Lattafa',name:'Fakhar Platin',vibe:'Crisp, masculine fresh-woody YSL Y line DNA.',g:'m',size:'100ml',price:'6,500',tags:['fresh','woody'],sec:'sec-kings'},
  {no:26,brand:'Lattafa',name:'Ramz Silver',vibe:'JPG Ultra Male clone — pear, mint, vanilla powerhouse.',g:'m',size:'100ml',price:'3,999',tags:['sweet','fresh'],sec:'sec-kings'},
  {no:32,brand:'Lattafa',name:'Maahir Black',vibe:'Very smoky, leather, villainous oud — dark and commanding.',g:'m',size:'100ml',price:'6,999',tags:['woody','oud','leather'],sec:'sec-kings'},
  {no:33,brand:'Lattafa',name:'Maahir Silver',vibe:'PDM Sedley clone — fresh minty citrus with creamy woods.',g:'m',size:'100ml',price:'7,500',tags:['fresh','woody'],sec:'sec-kings'},
  {no:41,brand:'Lattafa',name:'Ameer Black',vibe:'Warm spice, masculine date-night scent — oud and amber.',g:'m',size:'100ml',price:'3,999',tags:['spicy','oud'],sec:'sec-kings'},
  {no:43,brand:'Lattafa',name:'His Confession',vibe:'Mandarin, cinnamon, leather — intense date-night signature.',g:'m',size:'100ml',price:'9,999',tags:['spicy','leather','woody'],sec:'sec-kings'},
  {no:45,brand:'Lattafa',name:'Saheb',vibe:'Luxurious bergamot, ambergris and vanilla — elegant masculine.',g:'m',size:'100ml',price:'5,500',tags:['fresh','sweet'],sec:'sec-kings'},
  {no:52,brand:'Lattafa',name:'Conf. Platinum',vibe:'Spicy citrus, crisp and masculine fresh.',g:'m',size:'100ml',price:'5,500',tags:['fresh','spicy'],sec:'sec-kings'},
  {no:57,brand:'Rave',name:'Now Black',vibe:'Intense fruity pineapple with Aventus twist — casual beast.',g:'m',size:'100ml',price:'2,800–2,999',tags:['fresh','fruity'],sec:'sec-kings'},
  {no:62,brand:'Afnan',name:'9 PM',vibe:'JPG Ultra Male clone — beast mode vanilla caramel powerhouse.',g:'m',size:'100ml',price:'6,500–6,999',tags:['sweet','gourmand'],sec:'sec-kings'},
  {no:63,brand:'Afnan',name:'9 PM Rebel',vibe:'Vibrant pineapple and warm spices — a rebellious masculine.',g:'m',size:'100ml',price:'11,000',tags:['fruity','spicy'],sec:'sec-kings'},
  {no:64,brand:'Afnan',name:'9 PM Elixir',vibe:'Deeper, spicier and smoother — the richer darker 9 PM.',g:'m',size:'100ml',price:'12,500',tags:['spicy','sweet'],sec:'sec-kings'},
  {no:67,brand:'Afnan',name:'Turathi Blue',vibe:'Bvlgari Tygar / BDC clone — clean, powdery aquatic freshness.',g:'m',size:'100ml',price:'11,000',tags:['fresh','aquatic'],sec:'sec-kings'},
  {no:68,brand:'Afnan',name:'Turathi Brown',vibe:'Oud Ispahan / rich warm and spicy woods — deep luxury.',g:'m',size:'100ml',price:'11,000',tags:['woody','oud','spicy'],sec:'sec-kings'},
  {no:73,brand:'Afnan',name:'Supremacy Col. Ed.',vibe:'Creed Aventus / Absolu Aventus clone — the king of clones.',g:'m',size:'100ml',price:'14,999',tags:['fresh','fruity','woody'],sec:'sec-kings'},
  {no:82,brand:'Maison Alhambra',name:'Glacier Ultra',vibe:'JPG Le Male clone — minty lavender, sweet vanilla masculinity.',g:'m',size:'100ml',price:'5,500',tags:['fresh','sweet'],sec:'sec-kings'},
  {no:83,brand:'Maison Alhambra',name:'The Kingdom',vibe:'JPG Le Male Elixir — intensified rich vanilla amber spice.',g:'m',size:'100ml',price:'7,500',tags:['sweet','spicy'],sec:'sec-kings'},
  {no:85,brand:'Maison Alhambra',name:"Yeah! Man",vibe:'YSL Y clone — clean iris, amber and ginger freshness.',g:'m',size:'100ml',price:'5,500',tags:['fresh','woody'],sec:'sec-kings'},
  {no:89,brand:'French Avenue',name:'Liquid Brun',vibe:'PDM Althair clone — warm amber, plum and cashmere woods.',g:'m',size:'100ml',price:'11,999',tags:['woody','sweet'],sec:'sec-kings'},
  {no:100,brand:'Armani',name:'Code EDT',vibe:'Iconic tonka, bergamot and guaiac wood — timeless seduction.',g:'m',size:'100ml',price:'13,000',tags:['woody','sweet'],sec:'sec-kings',orig:true},
  {no:115,brand:'Paco Rabanne',name:'1 Million',vibe:'Blood mandarin, cinnamon, leather — the golden masculine classic.',g:'m',size:'100ml',price:'21,000',tags:['spicy','leather'],sec:'sec-kings',orig:true},
  {no:117,brand:'Valentino',name:'Born In Roma',vibe:'Juicy apple, rock rose, vetiver — modern Italian masculine.',g:'m',size:'100ml',price:'28,000',tags:['woody','fresh'],sec:'sec-kings',orig:true},
  {no:119,brand:'Burberry',name:'Hero',vibe:'Cedar, juniper and bergamot — a clean powerfully fresh hero.',g:'m',size:'100ml',price:'22,000',tags:['fresh','woody'],sec:'sec-kings',orig:true},
  {no:120,brand:'Versace',name:'Eros EDP/Parfum',vibe:'Mint, vanilla and woodsy sensuality — the god of seduction.',g:'m',size:'100ml',price:'23,000–27,000',tags:['fresh','sweet','woody'],sec:'sec-kings',orig:true},
  {no:122,brand:'Azzaro',name:'The Most Wanted',vibe:'Tobacco, cinnamon, hot amber — seductive masculine classic.',g:'m',size:'100ml',price:'28,000',tags:['spicy','sweet'],sec:'sec-kings',orig:true},
  {no:128,brand:'Armaf',name:'Club de Nuit Intense Man',vibe:'Creed Aventus clone — pineapple, birch, musk, oakmoss legend.',g:'m',size:'105/200ml',price:'7,500–15,000',tags:['fresh','fruity','woody'],sec:'sec-kings'},
  {no:129,brand:'Armaf',name:'Club de Nuit Urban Man',vibe:'Sauvage + Aventus hybrid — fresh, smoky and powerfully modern.',g:'m',size:'105ml',price:'12,000',tags:['fresh','woody'],sec:'sec-kings'},
  {no:132,brand:'Rasasi',name:'Hawas / Hawas Ice',vibe:'Fresh aquatic with warm cinnamon — versatile masculine legend.',g:'m',size:'100ml',price:'6,999',tags:['fresh','aquatic','spicy'],sec:'sec-kings'},
  {no:133,brand:'Rasasi',name:'Hawas Black',vibe:'Deep, darker interpretation — bold and intense Hawas.',g:'m',size:'100ml',price:'9,000–9,999',tags:['woody','spicy'],sec:'sec-kings'},
  {no:134,brand:'Rasasi',name:'Hawas Malibu',vibe:'Tropical fruit cocktail — vibrant, beach-ready masculine.',g:'m',size:'100ml',price:'9,999–11,000',tags:['fresh','fruity'],sec:'sec-kings'},
  {no:135,brand:'Rasasi',name:'Hawas Kobra',vibe:'LV Imagination clone — bright citrus suede freshness.',g:'m',size:'100ml',price:'9,999–11,000',tags:['fresh','woody'],sec:'sec-kings'},
  {no:147,brand:'Ahmed Al Maghribi',name:'Kaaf',vibe:'Very fresh, clean and crisp — signature daily masculine.',g:'m',size:'100ml',price:'11,000',tags:['fresh'],sec:'sec-kings'},
  {no:148,brand:'Rayhaan',name:'Lion',vibe:'Bold spicy and sweet — roaring masculine oriental pride.',g:'m',size:'100ml',price:'11,999',tags:['oud','spicy','sweet'],sec:'sec-kings'},
  {no:106,brand:'Jean Paul Gaultier',name:'Le Male Le Parfum',vibe:'Intensified lavender, bergamot and warm tonka beast.',g:'m',size:'125ml',price:'31,999',tags:['sweet','fresh'],sec:'sec-kings',orig:true},
  {no:107,brand:'Jean Paul Gaultier',name:'Le Male Elixir',vibe:'Dark, spicy and addictive amber — the Le Male evolved.',g:'m',size:'125ml',price:'29,999',tags:['spicy','sweet'],sec:'sec-kings',orig:true},
  {no:121,brand:'Versace',name:'Eros Flame',vibe:'Rosewood, pepper, mineral notes — fiery masculine intensity.',g:'m',size:'100ml',price:'23,500–24,000',tags:['woody','spicy'],sec:'sec-kings',orig:true},

  // QUEENS
  {no:7,brand:'Lattafa',name:'Yara Pink',vibe:'Viral sweet strawberry milkshake and vanilla — TikTok famous.',g:'w',size:'100ml',price:'3,999',tags:['sweet','fruity','gourmand'],sec:'sec-queens'},
  {no:8,brand:'Lattafa',name:'Yara Orange (Tous)',vibe:'Mango, coconut, passionfruit — tropical juicy femininity.',g:'w',size:'100ml',price:'3,999',tags:['fruity','sweet'],sec:'sec-queens'},
  {no:9,brand:'Lattafa',name:'Yara White (Moi)',vibe:'Creamy peaches and cinnamon woods — soft and sensual.',g:'w',size:'100ml',price:'5,999',tags:['sweet','woody'],sec:'sec-queens'},
  {no:10,brand:'Lattafa',name:'Yara Candy',vibe:'Green tangerine, strawberry fizz and vanilla — playful fizzy.',g:'w',size:'100ml',price:'N/A',tags:['sweet','fruity'],sec:'sec-queens'},
  {no:14,brand:'Lattafa',name:"Bade'e Al Oud Blush",vibe:'Delicate rose milk, almond and meringue — dreamy feminine.',g:'w',size:'100ml',price:'7,500',tags:['floral','sweet'],sec:'sec-queens'},
  {no:17,brand:'Lattafa',name:'Fakhar Rose',vibe:"Givenchy L'Interdit clone — iris, rose and vetiver elegance.",g:'w',size:'100ml',price:'6,500',tags:['floral','woody'],sec:'sec-queens'},
  {no:19,brand:'Lattafa',name:'Eclaire',vibe:'Bianco Latte clone — caramel, milk, sugar, dessert-level gourmand.',g:'w',size:'100ml',price:'11,000',tags:['sweet','gourmand'],sec:'sec-queens'},
  {no:25,brand:'Lattafa',name:'Hayaati Florence',vibe:'Grapefruit, lychee, vanilla — bright floral-fruity feminine.',g:'w',size:'100ml',price:'3,500',tags:['fruity','floral'],sec:'sec-queens'},
  {no:38,brand:'Lattafa',name:'Nasmaat',vibe:'Fruity gourmand — caramel and blackcurrant sweetness.',g:'w',size:'100ml',price:'10,999',tags:['sweet','gourmand','fruity'],sec:'sec-queens'},
  {no:39,brand:'Lattafa',name:'Haya',vibe:'Pink pepper, praline and vanilla — spicy-sweet feminine charm.',g:'w',size:'100ml',price:'6,500',tags:['sweet','spicy'],sec:'sec-queens'},
  {no:40,brand:'Lattafa',name:'Qimmah',vibe:'Coffee, tonka bean, sweet spice — rich cozy feminine.',g:'w',size:'100ml',price:'3,500',tags:['sweet','gourmand'],sec:'sec-queens'},
  {no:44,brand:'Lattafa',name:'Her Confession',vibe:'Tuberose, incense, florals — bold feminine declaration.',g:'w',size:'100ml',price:'9,999',tags:['floral','oriental'],sec:'sec-queens'},
  {no:48,brand:'Lattafa',name:'Victoria',vibe:'Creamy lemon meringue pie and florals — luxury pastry chic.',g:'w',size:'100ml',price:'11,000',tags:['sweet','floral','gourmand'],sec:'sec-queens'},
  {no:56,brand:'Lattafa',name:'Pride Tharwah Gold',vibe:'YSL Libre Intense clone — lavender, vanilla, musk freedom.',g:'w',size:'100ml',price:'11,999',tags:['floral','sweet'],sec:'sec-queens'},
  {no:58,brand:'Rave',name:'Now Women Pink',vibe:'Marshmallow, strawberry — Burberry Her vibe, viral and sweet.',g:'w',size:'100ml',price:'3,300',tags:['sweet','fruity'],sec:'sec-queens'},
  {no:59,brand:'Ard Al Zaafaran',name:'Bint Hooran',vibe:'Good Girl (Carolina Herrera) clone — cocoa, rose, tonka.',g:'w',size:'100ml',price:'3,999',tags:['sweet','floral'],sec:'sec-queens'},
  {no:65,brand:'Afnan',name:'9 AM White',vibe:'Citrus and white florals — clean, fresh feminine morning.',g:'w',size:'100ml',price:'6,999',tags:['fresh','floral'],sec:'sec-queens'},
  {no:71,brand:'Afnan',name:'Supremacy Purple',vibe:'Sweet oriental and fruits — rich indulgent feminine.',g:'w',size:'100ml',price:'12,000',tags:['sweet','oriental'],sec:'sec-queens'},
  {no:72,brand:'Afnan',name:'Supremacy Pink',vibe:'Gardenia, honeysuckle and sweet florals — girly and fresh.',g:'w',size:'100ml',price:'12,000',tags:['floral','sweet'],sec:'sec-queens'},
  {no:74,brand:'Afnan',name:'Modest Deux',vibe:'Scandal by Night vibe — berry, cocoa, dark feminine drama.',g:'w',size:'100ml',price:'14,999',tags:['sweet','fruity'],sec:'sec-queens'},
  {no:75,brand:'Afnan',name:'Historic Doria',vibe:'Sweet fruity-floral and musky — elegant everyday feminine.',g:'w',size:'100ml',price:'12,999',tags:['fruity','floral'],sec:'sec-queens'},
  {no:76,brand:'Afnan',name:'Souvenir Body Bliss',vibe:'Amber, musk, fruity sweet — irresistible skin scent.',g:'w',size:'100ml',price:'14,000',tags:['sweet','fruity'],sec:'sec-queens'},
  {no:81,brand:'Maison Alhambra',name:'La Voie',vibe:'Giorgio Armani My Way clone — floral woods with neroli.',g:'w',size:'100ml',price:'4,999',tags:['floral','woody'],sec:'sec-queens'},
  {no:94,brand:'Chanel',name:'Chance',vibe:'Fresh citrus, jasmine, white musk — the iconic Chanel feminine.',g:'w',size:'50ml',price:'13,200',tags:['floral','fresh'],sec:'sec-queens',orig:true},
  {no:104,brand:'Armani',name:'My Way',vibe:'Bergamot, Indian tuberose, white musks — travel in a bottle.',g:'w',size:'90ml',price:'2,999',tags:['floral','fresh'],sec:'sec-queens'},
  {no:108,brand:'Jean Paul Gaultier',name:'Scandal Pour Femme',vibe:'Honey, blood orange, gardenia — bold scandalous feminine.',g:'w',size:'80ml',price:'3,499',tags:['sweet','floral'],sec:'sec-queens'},
  {no:109,brand:'YSL',name:'Libre EDP / Intense',vibe:'Lavender, vanilla, musk — the free modern feminine icon.',g:'w',size:'90ml',price:'6,500–25,000',tags:['floral','sweet'],sec:'sec-queens',orig:true},
  {no:110,brand:'YSL',name:'Mon Paris',vibe:'Raspberry, white peony, white musks — romantic and passionate.',g:'w',size:'100ml',price:'2,999',tags:['fruity','floral'],sec:'sec-queens'},
  {no:118,brand:'Burberry',name:'Goddess',vibe:'Lavender, bourbon vanilla — modern powerful feminine icon.',g:'w',size:'100ml',price:'29,999',tags:['floral','sweet'],sec:'sec-queens',orig:true},
  {no:124,brand:'Calvin Klein',name:'Eternity For Women',vibe:'Freesia, lily, violet — clean timeless feminine classic.',g:'w',size:'100ml',price:'3,800',tags:['floral','fresh'],sec:'sec-queens'},
  {no:127,brand:'Billie Eilish',name:'EDP',vibe:'Sugared petals, vanilla, musk — soft, dreamy, iconic.',g:'w',size:'100ml',price:'20,000–21,000',tags:['sweet','floral'],sec:'sec-queens',orig:true},
  {no:131,brand:'Armaf',name:'Club de Nuit Intense Woman',vibe:'Chypre floral — rose, patchouli, stunning feminine presence.',g:'w',size:'105ml',price:'11,999',tags:['floral','woody'],sec:'sec-queens'},
  {no:141,brand:'Zimaya',name:'Fatima',vibe:'PDM Delina clone — rose, rhubarb, musk — premium femininity.',g:'w',size:'100ml',price:'8,999',tags:['sweet','floral'],sec:'sec-queens'},

  // OUD
  {no:11,brand:'Lattafa',name:"Bade'e Al Oud Glory",vibe:'Oud For Greatness (Initio) clone — noble, smoky, divine oud.',g:'u',size:'100ml',price:'6,500',tags:['oud','oriental'],sec:'sec-oud'},
  {no:12,brand:'Lattafa',name:"Bade'e Al Oud Amethyst",vibe:'Atomic Rose / oud blend — floral oud with rosy depth.',g:'u',size:'100ml',price:'5,500–6,500',tags:['oud','floral'],sec:'sec-oud'},
  {no:31,brand:'Lattafa',name:'Opulent Black',vibe:'Heavy oriental oud profile — dark, smoky and magnetic.',g:'m',size:'100ml',price:'5,000',tags:['oud','oriental'],sec:'sec-oud'},
  {no:35,brand:'Lattafa',name:'Art of Nature I',vibe:'Plum, blackcurrant, fig and oud — artistic and complex.',g:'u',size:'100ml',price:'11,000–12,000',tags:['oud','fruity'],sec:'sec-oud'},
  {no:36,brand:'Lattafa',name:'Lail Maleki',vibe:'Sweet oriental — citrus, sandalwood and oud harmony.',g:'u',size:'100ml',price:'5,500–6,500',tags:['oud','oriental','sweet'],sec:'sec-oud'},
  {no:55,brand:'Lattafa',name:'Ameer Al Oudh Int.',vibe:'Replica By The Fireplace vibe — sugar, vanilla and agarwood.',g:'u',size:'100ml',price:'3,800',tags:['oud','sweet'],sec:'sec-oud'},
  {no:60,brand:'Ard Al Zaafaran',name:'Mousuf',vibe:'Chocolate, grape and warm woods — rich Middle Eastern depth.',g:'u',size:'100ml',price:'1,800–2,300',tags:['oud','sweet'],sec:'sec-oud'},
  {no:61,brand:'Ard Al Zaafaran',name:'Riqqa',vibe:'Vanilla, cognac, cinnamon — warm arabesque oriental.',g:'u',size:'100ml',price:'5,999',tags:['oud','sweet','spicy'],sec:'sec-oud'},
  {no:70,brand:'Afnan',name:'Supremacy In Oud',vibe:'Oud For Greatness clone — powerful noble oud with saffron.',g:'u',size:'100ml',price:'14,999',tags:['oud','oriental'],sec:'sec-oud'},
  {no:86,brand:'Maison Alhambra',name:"Lueur D'Espoir Ambre Emir",vibe:'Smoky wood and sensual spice — deep Middle Eastern warmth.',g:'u',size:'100ml',price:'7,999',tags:['oud','spicy','woody'],sec:'sec-oud'},
  {no:88,brand:'Paris Corner',name:'Ministry of Oud',vibe:'Spicy amber woods — exotic and warm oriental.',g:'u',size:'100ml',price:'4,999',tags:['oud','oriental','spicy'],sec:'sec-oud'},
  {no:136,brand:'Al Haramain',name:'Amber Oud Gold Edition',vibe:'Precious amber and oud — the gold standard of Arabic luxury.',g:'u',size:'120ml',price:'14,999',tags:['oud','oriental'],sec:'sec-oud'},
  {no:137,brand:'Al Haramain',name:'Amber Oud Blue Edition',vibe:'Aquatic amber oud — fresh meets deep in perfect balance.',g:'m',size:'120ml',price:'14,999',tags:['oud','aquatic'],sec:'sec-oud'},
  {no:138,brand:'Ibrahim Al Qurashi',name:'White Regent Diamond',vibe:'Modern oud, fresh and vanilla blend — unisex confidence.',g:'u',size:'200ml',price:'N/A',tags:['oud','fresh'],sec:'sec-oud'},
  {no:139,brand:'Ibrahim Al Qurashi',name:'Grey Pearl Diamond',vibe:'Sophisticated grey musk and oud pearl — signature unisex.',g:'u',size:'200ml',price:'N/A',tags:['oud','oriental'],sec:'sec-oud'},
  {no:143,brand:'Zimaya',name:'Night Shadow',vibe:'LV Ombre Nomade clone — incense, papyrus and rose oud.',g:'u',size:'100ml',price:'10,000',tags:['oud','woody'],sec:'sec-oud'},
  {no:144,brand:'Gissah',name:'Imperial Valley',vibe:'Exotic leathery and oriental notes — mysterious and rare.',g:'u',size:'100ml',price:'5,999',tags:['oud','leather','oriental'],sec:'sec-oud'},
  {no:34,brand:'Lattafa',name:'Maahir Hair Mist',vibe:'Resin and amber floral hair mist — scented styling ritual.',g:'u',size:'50ml',price:'2,800',tags:['floral','oriental'],sec:'sec-oud'},

  // FRESH
  {no:24,brand:'Lattafa',name:'Hayaati Black',vibe:'Fresh citrus and woodsy — Invictus Aqua vibe, clean power.',g:'u',size:'100ml',price:'5,999',tags:['fresh','aquatic','woody'],sec:'sec-fresh'},
  {no:66,brand:'Afnan',name:'9 AM Dive',vibe:'Bleu de Chanel + YSL Y mashup — clean aquatic freshness beast.',g:'u',size:'100ml',price:'7,999',tags:['fresh','aquatic'],sec:'sec-fresh'},
  {no:77,brand:'Maison Alhambra',name:'Jean Lowe Azure',vibe:'LV Afternoon Swim clone — sparkling marine luminosity.',g:'u',size:'100ml',price:'9,999',tags:['fresh','aquatic'],sec:'sec-fresh'},
  {no:78,brand:'Maison Alhambra',name:'Jean Lowe Fraiche',vibe:'LV Nouveau Monde clone — deep sea iris and sandalwood.',g:'u',size:'100ml',price:'9,999',tags:['fresh','aquatic','woody'],sec:'sec-fresh'},
  {no:93,brand:'Chanel',name:'Bleu de Chanel EDP',vibe:'Citrus, incense, dry woods — the gold standard of masculinity.',g:'m',size:'100ml',price:'33,500',tags:['fresh','woody'],sec:'sec-fresh',orig:true},
  {no:95,brand:'Dior',name:'Sauvage EDP/EDT',vibe:"Bergamot, ambroxan, pepper — the world's best-selling perfume.",g:'m',size:'100ml',price:'24,000–31,000',tags:['fresh','spicy'],sec:'sec-fresh',orig:true},
  {no:96,brand:'Dior',name:'Sauvage Elixir',vibe:'Concentrated Sauvage — grapefruit, cinnamon, sandalwood beast.',g:'m',size:'60/100ml',price:'32,500–45,000',tags:['fresh','spicy','woody'],sec:'sec-fresh',orig:true},
  {no:111,brand:'YSL',name:'Y EDP',vibe:'Fresh ginger, bergamot, sage and amber — modern masculine icon.',g:'m',size:'100ml',price:'28,000–29,000',tags:['fresh','woody'],sec:'sec-fresh',orig:true},
  {no:123,brand:'Calvin Klein',name:'Obsession',vibe:'Citrus, spice and woods — the classic sensual unisex.',g:'u',size:'100ml',price:'11,999',tags:['fresh','spicy'],sec:'sec-fresh',orig:true},
  {no:153,brand:'Emper',name:'Epic Adventure',vibe:'Woody citrus masculine — fresh everyday versatile pick.',g:'m',size:'100ml',price:'4,500–4,999',tags:['fresh','woody'],sec:'sec-fresh'},
  {no:159,brand:'Dagu',name:'Ice EDP',vibe:'Cold fresh masculine daily — crisp, clean, budget pick.',g:'m',size:'100ml',price:'1,699',tags:['fresh'],sec:'sec-fresh'},

  // WOODY
  {no:37,brand:'Lattafa',name:'Liam Grey',vibe:'BDK Gris Charnel clone — fig, tea, spices and smoky woods.',g:'u',size:'100ml',price:'5,500–7,500',tags:['woody','spicy'],sec:'sec-woody'},
  {no:79,brand:'Maison Alhambra',name:'Philos Messenger',vibe:'Sospiro Vibrato clone — smoky vetiver, amber, wood harmony.',g:'u',size:'100ml',price:'6,500',tags:['woody','spicy'],sec:'sec-woody'},
  {no:84,brand:'Maison Alhambra',name:'Spectre Ghost',vibe:'Warm vanilla, wood and spices — mysterious and long-lasting.',g:'u',size:'80ml',price:'11,999',tags:['woody','sweet'],sec:'sec-woody'},
  {no:91,brand:'French Avenue',name:"Tobacco D'Feu",vibe:'Rich tobacco, leather, incense, cumin then oud and sandalwood.',g:'u',size:'100ml',price:'N/A',tags:['woody','leather','spicy'],sec:'sec-woody'},
  {no:112,brand:'Tom Ford',name:'Ombré Leather',vibe:'Leather, thyme, cardamom — raw sensual luxury skin scent.',g:'u',size:'100ml',price:'6,500',tags:['leather','woody'],sec:'sec-woody',orig:true},
  {no:140,brand:'Zara',name:'Perfume',vibe:'Red Temptation, Vibrant Leather — bold modern femininity.',g:'w',size:'80ml',price:'6,999',tags:['leather','woody'],sec:'sec-woody'},
  {no:156,brand:'Dagu',name:'Azure Royal',vibe:'Fresh pear, musk, orange — warm weather winning combination.',g:'u',size:'100ml',price:'8,999',tags:['fresh','woody'],sec:'sec-woody'},
  {no:162,brand:'Dagu',name:'Brown Orchid + Deo',vibe:'Elegance sandalwood and sweet set — refined woody masculine.',g:'m',size:'set',price:'3,500',tags:['woody','sweet'],sec:'sec-woody'},
  {no:155,brand:'Dagu',name:'La African Drummer',vibe:'Vibrant woody unisex scent — earthy, warm, rhythmic.',g:'u',size:'100ml',price:'8,500',tags:['woody','earthy'],sec:'sec-woody'},

  // SWEET
  {no:4,brand:'Lattafa',name:'Khamrah OG',vibe:"By Kilian Angels' Share twist — whiskey, rum, cinnamon and oak.",g:'u',size:'100ml',price:'6,500–7,000',tags:['sweet','gourmand'],sec:'sec-sweet'},
  {no:5,brand:'Lattafa',name:'Khamrah Qahwa',vibe:"Angels' Share with rich arabica coffee — warm and addictive.",g:'u',size:'100ml',price:'6,999',tags:['sweet','gourmand'],sec:'sec-sweet'},
  {no:6,brand:'Lattafa',name:'Khamrah Dukhan',vibe:'Masculine pimento, tobacco and amber — bold spiced gourmand.',g:'u',size:'100ml',price:'9,999',tags:['sweet','spicy'],sec:'sec-sweet'},
  {no:20,brand:'Lattafa',name:'Nebras',vibe:'Billie Eilish EDP clone — cocoa, vanilla, creamy beast mode.',g:'u',size:'100ml',price:'7,500',tags:['sweet','gourmand'],sec:'sec-sweet'},
  {no:21,brand:'Lattafa',name:'Ajwad',vibe:'Mancera Roses Vanille twist — vanilla rose and sandalwood.',g:'u',size:'100ml',price:'6,500',tags:['sweet','floral'],sec:'sec-sweet'},
  {no:27,brand:'Lattafa',name:'Ramz Gold',vibe:'Pineapple, citrus, apple and vanilla — sweet fruity masculinity.',g:'u',size:'100ml',price:'4,999',tags:['sweet','fruity'],sec:'sec-sweet'},
  {no:30,brand:'Lattafa',name:'Opulent Red',vibe:'Peach, saffron, cognac — warm oriental fruity richness.',g:'u',size:'100ml',price:'5,000',tags:['sweet','oriental'],sec:'sec-sweet'},
  {no:51,brand:'Lattafa',name:'Conf. Private Gold',vibe:'Tiziana Terenzi Kirke clone — citrus blossom vanilla paradise.',g:'u',size:'100ml',price:'5,500',tags:['sweet','fruity'],sec:'sec-sweet'},
  {no:80,brand:'Maison Alhambra',name:'Lovely Cherie',vibe:'Tom Ford Lost Cherry clone — cherry liqueur, tonka, almond.',g:'u',size:'80ml',price:'5,999',tags:['sweet','fruity'],sec:'sec-sweet'},
  {no:87,brand:'Paris Corner',name:'Pendora Rouge',vibe:'BR540 style — jasmine, saffron, ambergris and cedar sweetness.',g:'u',size:'100ml',price:'2,999',tags:['sweet','floral'],sec:'sec-sweet'},
  {no:92,brand:'Maison Alhambra',name:'Cocktail Intense',vibe:"By Kilian Angels' Share clone — boozy sweet spice perfection.",g:'u',size:'100ml',price:'4,999–5,500',tags:['sweet','gourmand'],sec:'sec-sweet'},
  {no:142,brand:'Zimaya',name:'Amber Is Great',vibe:'Smooth vanilla, fruit and musk — crowd-pleasing elegance.',g:'u',size:'100ml',price:'7,999',tags:['sweet','oriental'],sec:'sec-sweet'},
  {no:157,brand:'Dagu',name:'Vanilla Voyage & Aura',vibe:'Bakery level gourmand set — irresistible, warm, enveloping.',g:'u',size:'each',price:'12,000',tags:['sweet','gourmand'],sec:'sec-sweet'},
  {no:16,brand:'Lattafa',name:'Fakhar Gold Extrait',vibe:'Paco Rabanne 1 Million Parfum clone — gold standard richness.',g:'u',size:'100ml',price:'6,500',tags:['sweet','spicy'],sec:'sec-sweet'},
  {no:103,brand:'Emporio Armani',name:'Stronger With You Absolutely',vibe:'Vanilla, lavender, iris — the gourmand masculine powerhouse.',g:'m',size:'100ml',price:'22,000',tags:['sweet','floral'],sec:'sec-sweet',orig:true},

  // UNISEX
  {no:13,brand:'Lattafa',name:"Bade'e Al Oud Sublime",vibe:'Kayali Eden Juicy Apple — apple, caramel, sandalwood harmony.',g:'u',size:'100ml',price:'7,000',tags:['fruity','sweet','woody'],sec:'sec-unisex'},
  {no:22,brand:'Lattafa',name:'Qaed Al Fursan Black',vibe:'Aventus/BR540 vibe — pineapple, saffron, smoky signature.',g:'u',size:'100ml',price:'2,500–2,800',tags:['fresh','fruity'],sec:'sec-unisex'},
  {no:23,brand:'Lattafa',name:'Qaed Al Fursan White',vibe:'Creamy coconut and citrus — bright, clean and effortless.',g:'u',size:'100ml',price:'2,800',tags:['fresh','sweet'],sec:'sec-unisex'},
  {no:28,brand:'Lattafa',name:'Shaheen Silver',vibe:'Creed Aventus clone — pineapple, birch, oakmoss, musk.',g:'u',size:'100ml',price:'6,500',tags:['fresh','fruity','woody'],sec:'sec-unisex'},
  {no:29,brand:'Lattafa',name:'Shaheen Gold',vibe:'Deep woods, oud and sweet warmth — rich signature DNA.',g:'u',size:'100ml',price:'5,999',tags:['woody','sweet','oud'],sec:'sec-unisex'},
  {no:49,brand:'Lattafa',name:'Ana Abiyedh White',vibe:'Erba Pura (Xerjoff) clone — lemon, coconut, vanilla paradise.',g:'u',size:'60ml',price:'4,500',tags:['fresh','sweet'],sec:'sec-unisex'},
  {no:50,brand:'Lattafa',name:'Ana Abiyedh Rouge',vibe:'Baccarat Rouge 540 clone — ambergris, cedarwood, jasmine.',g:'u',size:'60ml',price:'4,500',tags:['sweet','woody'],sec:'sec-unisex'},
  {no:54,brand:'Lattafa',name:"Ra'ed Luxe",vibe:'Pineapple, jasmine and watermelon — bright and uplifting.',g:'u',size:'100ml',price:'5,500–5,999',tags:['fruity','fresh'],sec:'sec-unisex'},
  {no:69,brand:'Afnan',name:'Turathi Electric',vibe:'Blue Talisman clone — pear, fresh syrup, electric vivacity.',g:'u',size:'90ml',price:'13,999–14,000',tags:['fresh','fruity'],sec:'sec-unisex'},
  {no:90,brand:'Maison Alhambra',name:'Island Vanilla Dunes',vibe:'PDM Althair clone — warm amber, vanilla and cashmere.',g:'u',size:'80ml',price:'11,999',tags:['sweet','woody'],sec:'sec-unisex'},
  {no:114,brand:'MFK',name:'Baccarat Rouge 540',vibe:'Ambergris, jasmine, cedarwood — the legend itself.',g:'u',size:'100ml',price:'2,900–3,500',tags:['sweet','woody'],sec:'sec-unisex',orig:true},
  {no:116,brand:'Creed',name:'Aventus',vibe:'Pineapple, birch, oakmoss — the king of modern perfumery.',g:'m',size:'100ml',price:'3,000–6,000',tags:['fresh','fruity','woody'],sec:'sec-unisex',orig:true},
  {no:46,brand:'Lattafa',name:'Afeef',vibe:'Fresh florals — jasmine, orange blossom harmony.',g:'u',size:'100ml',price:'8,999–9,000',tags:['floral','fresh'],sec:'sec-unisex'},

  // DESIGNER
  {no:97,brand:'Dior',name:'Gris Dior (Tester)',vibe:'Rose, iris, white musk — understated unisex elegance.',g:'u',size:'full',price:'6,500',tags:['floral','fresh'],sec:'sec-designer',orig:true},
  {no:98,brand:'Dior',name:'Miss Dior (Tester)',vibe:'Rose, peony, musk — the timeless feminine Dior icon.',g:'w',size:'full',price:'6,500',tags:['floral','fresh'],sec:'sec-designer',orig:true},
  {no:99,brand:'Dior',name:'Hypnotic Poison (Tester)',vibe:'Almond, jasmine, vanilla — seductive and mysterious.',g:'w',size:'100ml',price:'6,500',tags:['sweet','oriental'],sec:'sec-designer',orig:true},
  {no:101,brand:'Armani',name:'Code Profumo',vibe:'Apple, sage and tonka — the richer deeper Code expression.',g:'m',size:'100ml',price:'N/A',tags:['woody','sweet'],sec:'sec-designer',orig:true},
  {no:102,brand:'Emporio Armani',name:'Stronger With You Intensely',vibe:'Chestnut, vanilla, tobacco, vetiver — intense masculine icon.',g:'m',size:'100ml',price:'27,000',tags:['sweet','woody'],sec:'sec-designer',orig:true},
  {no:113,brand:'Tom Ford',name:'Black Orchid',vibe:'Black orchid, patchouli, dark chocolate — dark luxury icon.',g:'u',size:'100ml',price:'4,500–31,000',tags:['floral','oriental'],sec:'sec-designer',orig:true},
  {no:125,brand:'Ralph Lauren',name:'Polo Blue',vibe:'Melon, suede, sage — the iconic clean masculine standard.',g:'m',size:'100ml',price:'3,999',tags:['fresh','aquatic'],sec:'sec-designer'},
  {no:126,brand:'Givenchy',name:'Gentleman',vibe:'Iris, patchouli and vanilla — powdery refined masculinity.',g:'m',size:'100ml',price:'6,500',tags:['woody','sweet'],sec:'sec-designer'},
  {no:105,brand:'Emporio Armani',name:"Because It's You",vibe:'Pink pepper, rose, caramel — warm and modern feminine.',g:'w',size:'100ml',price:'3,000',tags:['sweet','floral'],sec:'sec-designer'},
  {no:130,brand:'Armaf',name:'Club de Nuit Woman',vibe:'Coco Mademoiselle clone — rose, patchouli, refined elegance.',g:'w',size:'105ml',price:'N/A',tags:['floral','woody'],sec:'sec-designer'},

  // SETS
  {no:149,brand:'Shaik',name:'Parfum Collections',vibe:'Highly requested Turkish original dupes — 20+ flavors in 50 & 100ml.',g:'u',size:'50/100ml',price:'2,800–5,500',tags:['misc'],sec:'sec-sets'},
  {no:150,brand:'Shaik',name:'Bamboo Diffusers',vibe:'Shaik air-freshener sticks for rooms — elegant home scenting.',g:'u',size:'100ml',price:'2,499–2,800',tags:['misc'],sec:'sec-sets'},
  {no:151,brand:'Fascination',name:'Dragon Mart',vibe:'Sweet, elegant Dubai export — crowd-pleasing oriental.',g:'u',size:'100ml',price:'6,999',tags:['sweet','oriental'],sec:'sec-sets'},
  {no:152,brand:'Shalis',name:'Original',vibe:"Pink (women's floral) & Blue (men's citrus) — clean classics.",g:'u',size:'100ml',price:'2,499–2,500',tags:['fresh','floral'],sec:'sec-sets'},
  {no:154,brand:'Dagu',name:'Candid Perfume',vibe:'JPG Scandal by Night vibe — dark berry, cocoa and warmth.',g:'w',size:'100ml',price:'3,999',tags:['sweet','floral'],sec:'sec-sets'},
  {no:158,brand:'Dagu',name:'Black Power',vibe:'Vanilla, rose and sandalwood — strong masculine daily.',g:'m',size:'100ml',price:'1,399–1,499',tags:['sweet','woody'],sec:'sec-sets'},
  {no:160,brand:'Caporal',name:'Trilogy Pour Femme',vibe:'Oriental clean feminine scent — affordable and wearable.',g:'w',size:'100ml',price:'2,000',tags:['oriental','floral'],sec:'sec-sets'},
  {no:161,brand:'Emper',name:'Laila',vibe:'Mountain floral and watermelon — fresh and light feminine.',g:'w',size:'100ml',price:'5,500',tags:['floral','fresh'],sec:'sec-sets'},
  {no:163,brand:'V.V. Love',name:'Lotion / Splash Set',vibe:'Splash and body lotion pack — skin-scenting essentials.',g:'u',size:'150+150ml',price:'~1,000',tags:['misc'],sec:'sec-sets'},
  {no:164,brand:'Dagu',name:'Smart Perfumes',vibe:'Heavy duty lasting copy scents — budget daily pocket pick.',g:'u',size:'30ml',price:'499',tags:['misc'],sec:'sec-sets'},
  {no:165,brand:'Dagu',name:'Mini Luxury Tester Vials',vibe:'Extrait tester pocket perfumes — try before you buy.',g:'u',size:'10ml',price:'499',tags:['misc'],sec:'sec-sets'},
  {no:166,brand:'Dagu',name:'4-in-1 Gift Box',vibe:'Four variations of mixed gifts — perfect gifting solution.',g:'u',size:'4x25ml',price:'1,800',tags:['misc'],sec:'sec-sets'},
  {no:167,brand:'Dagu',name:'Kids Perfume + Shower Gel',vibe:'Soothing baby / kid floral soap and scent — safe and gentle.',g:'u',size:'50ml set',price:'3,999',tags:['floral'],sec:'sec-sets'},
  {no:168,brand:"Victoria's Secret",name:'Body Splashes',vibe:'Bare Vanilla, Midnight Blossom, Into the Night — VS classics.',g:'w',size:'varies',price:'2,999',tags:['sweet','floral'],sec:'sec-sets'},
  {no:145,brand:'La Rive',name:"L'excellente",vibe:'Floral fruity — bright feminine affordable daily wear.',g:'w',size:'100ml',price:'3,499',tags:['floral','fruity'],sec:'sec-sets'},
  {no:146,brand:'La Rive',name:'Her Choice',vibe:'Feminine La Rive — fresh floral everyday wearable.',g:'w',size:'100ml',price:'3,999',tags:['floral','fresh'],sec:'sec-sets'},
  {no:42,brand:'Lattafa',name:'Ameerat Brown',vibe:'Citrus, aloe vera, musk — fresh light everyday feminine.',g:'w',size:'100ml',price:'3,999',tags:['fresh','floral'],sec:'sec-sets'},
  {no:53,brand:'Lattafa',name:'Winners Trophy Silver',vibe:'Valentino Born in Roma Coral Fantasy — light, vivid, modern.',g:'u',size:'100ml',price:'9,500',tags:['fresh','floral'],sec:'sec-sets'},
  {no:47,brand:'Lattafa',name:'Al Dirgham',vibe:'Orange blossom, floral vanilla — soft and elegant.',g:'u',size:'100ml',price:'5,999',tags:['floral','sweet'],sec:'sec-sets'},
];

// ── RENDER ──────────────────────────────────────────────────────
let activeFilter='all', searchQ='';

function gBadge(g){
  if(g==='m')return'<span class="badge badge-m">Men</span>';
  if(g==='w')return'<span class="badge badge-w">Women</span>';
  return'<span class="badge badge-u">Unisex</span>';
}

function getBottleEmoji(p){
  const t=p.tags,g=p.g;
  if(t.includes('oud'))return'🕌';
  if(t.includes('gourmand'))return'🍫';
  if(t.includes('floral')&&g==='w')return'🌸';
  if(t.includes('aquatic'))return'🌊';
  if(t.includes('leather'))return'🪶';
  if(t.includes('woody'))return'🪵';
  if(t.includes('sweet'))return'🍯';
  if(t.includes('fruity'))return'🍑';
  if(t.includes('spicy'))return'🌶️';
  if(g==='m')return'🏺';
  if(g==='w')return'🌺';
  return'🫧';
}

function buildCard(p,delay){
  const emoji=getBottleEmoji(p);
  const secColor=SEC_COLORS[p.sec]||'rgba(110,19,36,.15)';
  return `<div class="pcard" style="animation-delay:${delay}ms" onclick="openPanel(${p.no})">
    <div class="pcard-img" style="background:linear-gradient(135deg,${secColor},rgba(10,2,5,.88))">
      <div class="pcard-bottle">${emoji}</div>
      <div class="pcard-hover-hint">View Details</div>
    </div>
    <div class="pcard-info">
      <div class="pcard-id">ID · ${String(p.no).padStart(3,'0')}</div>
      <div class="pcard-brand">${p.brand}</div>
      <div class="pcard-name">${p.name}</div>
      <div class="pcard-badges">
        ${gBadge(p.g)}
        <span class="badge badge-size">${p.size}</span>
        ${p.orig?'<span class="badge badge-orig">Original</span>':'<span class="badge badge-clone">Clone</span>'}
        ${p.tags.filter(t=>t!=='misc').slice(0,2).map(t=>`<span class="badge badge-type">${t.charAt(0).toUpperCase()+t.slice(1)}</span>`).join('')}
      </div>
      ${p.price==='N/A'?'<div class="pcard-price-na">Price on request</div>':`<div class="pcard-price">${p.price} Br</div>`}
    </div>
  </div>`;
}

function render(){
  const c=document.getElementById('content');
  c.innerHTML='';
  SECTIONS.forEach(sec=>{
    let items=ALL.filter(p=>p.sec===sec.id);
    if(searchQ) items=items.filter(p=>
      p.name.toLowerCase().includes(searchQ)||
      p.brand.toLowerCase().includes(searchQ)||
      p.vibe.toLowerCase().includes(searchQ)||
      p.tags.join(' ').includes(searchQ)
    );
    if(activeFilter!=='all'){
      if(activeFilter==='men') items=items.filter(p=>p.g==='m');
      else if(activeFilter==='women') items=items.filter(p=>p.g==='w');
      else if(activeFilter==='unisex') items=items.filter(p=>p.g==='u');
      else if(activeFilter==='oud') items=items.filter(p=>p.tags.includes('oud'));
      else if(activeFilter==='fresh') items=items.filter(p=>p.tags.includes('fresh')||p.tags.includes('aquatic'));
      else if(activeFilter==='sweet') items=items.filter(p=>p.tags.includes('sweet')||p.tags.includes('gourmand'));
      else if(activeFilter==='woody') items=items.filter(p=>p.tags.includes('woody')||p.tags.includes('leather'));
      else if(activeFilter==='designer') items=items.filter(p=>p.orig);
      else if(activeFilter==='budget') items=items.filter(p=>{const n=parseFloat(p.price.replace(/[^0-9]/g,''));return !isNaN(n)&&n<5000;});
      else if(activeFilter==='above5k') items=items.filter(p=>{const n=parseFloat(p.price.replace(/[^0-9]/g,''));return !isNaN(n)&&n>=5000;});
      else if(activeFilter==='above10k') items=items.filter(p=>{const n=parseFloat(p.price.replace(/[^0-9]/g,''));return !isNaN(n)&&n>=10000;});
      else if(activeFilter==='clone') items=items.filter(p=>!p.orig);
    }
    if(!items.length) return;
    const el=document.createElement('div');
    el.className='cat-sec';
    el.id=sec.id;
    el.innerHTML=`
      <div class="sec-head" data-emoji="${sec.emoji}">
        <div class="sh-left">
          <div class="sh-tag">${sec.tag}</div>
          <div class="sh-title">${sec.emoji} ${sec.title}</div>
          <div class="sh-sub">${sec.sub}</div>
        </div>
        <div class="sh-right">
          <div class="sh-count">${items.length}</div>
          <div class="sh-count-l">Fragrances</div>
        </div>
      </div>
      <div class="p-grid">${items.map((p,i)=>buildCard(p,i*20)).join('')}</div>`;
    c.appendChild(el);
  });
  document.querySelectorAll('.snav-item').forEach(it=>{
    const oc=it.getAttribute('onclick')||'';
    const m=oc.match(/'([^']+)'/);
    if(m) it.classList.toggle('active',!!document.getElementById(m[1]));
  });
  revealObserver();
}

// ── DETAIL PANEL ────────────────────────────────────────────────
function openPanel(no){
  const p=ALL.find(x=>x.no===no);if(!p)return;
  const emoji=getBottleEmoji(p);
  const secColor=SEC_COLORS[p.sec]||'rgba(110,19,36,.25)';
  document.getElementById('dpBottle').textContent=emoji;
  document.getElementById('dpImg').style.background=`linear-gradient(135deg,${secColor},rgba(10,2,5,.9))`;
  document.getElementById('dpNo').textContent=`#${String(p.no).padStart(3,'0')}`;
  document.getElementById('dpBrand').textContent=p.brand;
  document.getElementById('dpName').textContent=p.name;
  document.getElementById('dpVibe').textContent=p.vibe;
  document.getElementById('dpPrice').textContent=p.price==='N/A'?'—':p.price+' Br';
  document.getElementById('dpPrice').className=p.price==='N/A'?'dp-price-na':'dp-price-val';
  document.getElementById('dpSizeBadge').innerHTML=`<span class="badge badge-size" style="font-size:10px;padding:5px 10px">${p.size}</span>`;
  document.getElementById('dpBadges').innerHTML=
    gBadge(p.g)+
    (p.orig?'<span class="badge badge-orig" style="font-size:8px;padding:3px 8px">Original</span>':'<span class="badge badge-clone" style="font-size:8px;padding:3px 8px">Clone / Alt</span>')+
    p.tags.filter(t=>t!=='misc').slice(0,3).map(t=>`<span class="badge" style="font-size:7px;padding:2px 7px;background:rgba(110,19,36,.15);border:1px solid rgba(110,19,36,.3);color:rgba(245,237,224,.5)">${t}</span>`).join('');
  document.getElementById('detailPanel').classList.add('open');
  document.getElementById('dpBackdrop').classList.add('open');
  document.body.style.overflow='';
}
function closePanel(){
  document.getElementById('detailPanel').classList.remove('open');
  document.getElementById('dpBackdrop').classList.remove('open');
}

// ── FILTER / SEARCH ─────────────────────────────────────────────
function setFilter(f,btn){
  activeFilter=f;
  document.querySelectorAll('.pill').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  render();
}
function doSearch(){
  searchQ=document.getElementById('searchInput').value.toLowerCase().trim();
  render();
}
function goTo(id){
  const el=document.getElementById(id);
  if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
}

// ── REVEAL ──────────────────────────────────────────────────────
const ro=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis');});
},{threshold:.1});
function revealObserver(){
  document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
}
revealObserver();

// ── SCROLL SPY ──────────────────────────────────────────────────
const secObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const id=e.target.id;
      document.querySelectorAll('.snav-item').forEach(it=>{
        const oc=it.getAttribute('onclick')||'';
        it.classList.toggle('active',oc.includes(`'${id}'`));
      });
    }
  });
},{threshold:.2,rootMargin:'-80px 0px 0px 0px'});

render();
setTimeout(()=>{
  document.querySelectorAll('.cat-sec').forEach(s=>secObs.observe(s));
},200);

// ════════════════════════════════════════════
//  CART ENGINE
// ════════════════════════════════════════════
let cart = [];
let currentPanelProduct = null;

function openCart() {
  document.getElementById('cartPanel').classList.add('open');
  document.getElementById('cartBackdrop').classList.add('open');
  renderCart();
}
function closeCart() {
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('cartBackdrop').classList.remove('open');
}

function addToCartFromPanel() {
  if (!currentPanelProduct) return;
  const p = currentPanelProduct;
  if (p.price === 'N/A') { alert('Price not available. Please call us to order.'); return; }

  const existing = cart.find(i => i.no === p.no);
  if (existing) {
    existing.qty++;
  } else {
    const priceNum = parseFloat(p.price.replace(/[^0-9.]/g, '')) || 0;
    cart.push({ no: p.no, brand: p.brand, name: p.name, price: priceNum, priceStr: p.price, size: p.size, emoji: getBottleEmoji(p), qty: 1 });
  }

  updateCartCount();
  flashCartBtn();
  showAddedState();
}

function quickAddToCart(no, event) {
  event.stopPropagation();
  const p = ALL.find(x => x.no === no);
  if (!p || p.price === 'N/A') return;
  const existing = cart.find(i => i.no === no);
  if (existing) { existing.qty++; } else {
    const priceNum = parseFloat(p.price.replace(/[^0-9.]/g, '')) || 0;
    cart.push({ no: p.no, brand: p.brand, name: p.name, price: priceNum, priceStr: p.price, size: p.size, emoji: getBottleEmoji(p), qty: 1 });
  }
  updateCartCount();
  flashCartBtn();
}

function showAddedState() {
  const btn = document.getElementById('dpAddCartBtn');
  btn.classList.add('added');
  btn.innerHTML = '✓ Added to Cart';
  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Add to Cart`;
  }, 1800);
}

function flashCartBtn() {
  const cnt = document.getElementById('cartCount');
  cnt.classList.add('bump');
  setTimeout(() => cnt.classList.remove('bump'), 300);
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = total;
}

function cartTotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function formatPrice(n) {
  return n.toLocaleString('en-ET') + ' Br';
}

function renderCart() {
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const empty = document.getElementById('cartEmpty');
  const headerCount = document.getElementById('cartHeaderCount');

  const total = cart.reduce((s, i) => s + i.qty, 0);
  headerCount.textContent = total > 0 ? `(${total})` : '';

  if (cart.length === 0) {
    el.innerHTML = '';
    el.appendChild(empty);
    empty.style.display = 'flex';
    footer.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  footer.style.display = 'block';

  el.innerHTML = cart.map(item => `
    <div class="cart-item" id="ci-${item.no}">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price > 0 ? formatPrice(item.price) : 'Price on request'}</div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-qty">
          <button class="cart-qty-btn" onclick="changeQty(${item.no},-1)">−</button>
          <span class="cart-qty-num">${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeQty(${item.no},1)">+</button>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.no})">remove</button>
      </div>
    </div>`).join('');

  document.getElementById('cartTotal').textContent = formatPrice(cartTotal());
}

function changeQty(no, delta) {
  const item = cart.find(i => i.no === no);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { cart = cart.filter(i => i.no !== no); }
  updateCartCount();
  renderCart();
}

function removeFromCart(no) {
  cart = cart.filter(i => i.no !== no);
  updateCartCount();
  renderCart();
}

// ════════════════════════════════════════════
//  CHECKOUT FLOW
// ════════════════════════════════════════════
const PAYMENT_ACCOUNTS = {
  Telebirr: '0993 33 7235',
  CBE: '1000123456789'
};

let selectedPayment = '';

function openCheckout() {
  if (cart.length === 0) return;
  closeCart();

  const summaryEl = document.getElementById('coSummary');
  summaryEl.innerHTML = cart.map(i => `
    <div class="co-sum-item">
      <span class="co-sum-item-name">${i.emoji} ${i.brand} ${i.name}</span>
      <span class="co-sum-item-qty">×${i.qty}</span>
      <span class="co-sum-item-price">${i.price > 0 ? formatPrice(i.price * i.qty) : '—'}</span>
    </div>`).join('');

  document.getElementById('coTotal').innerHTML = `
    <span class="co-total-lbl">Order Total</span>
    <span class="co-total-val">${formatPrice(cartTotal())}</span>`;

  document.getElementById('coName').value = '';
  document.getElementById('coPhone').value = '';
  document.querySelectorAll('input[name="payMethod"]').forEach(r => r.checked = false);
  document.getElementById('coAccountInfo').style.display = 'none';
  document.getElementById('coErr1').textContent = '';
  document.getElementById('coErr2').textContent = '';
  document.getElementById('coTxId').value = '';
  selectedPayment = '';

  document.getElementById('coStep1').style.display = 'block';
  document.getElementById('coStep2').style.display = 'none';

  document.getElementById('checkoutBackdrop').classList.add('open');
  document.getElementById('checkoutModal').classList.add('open');
}

function closeCheckout() {
  document.getElementById('checkoutBackdrop').classList.remove('open');
  document.getElementById('checkoutModal').classList.remove('open');
}

function selectPayment(method) {
  selectedPayment = method;
  const info = document.getElementById('coAccountInfo');
  const num = document.getElementById('coAccountNum');
  num.textContent = PAYMENT_ACCOUNTS[method] || '';
  info.style.display = 'block';
}

function goToStep2() {
  const name = document.getElementById('coName').value.trim();
  const phone = document.getElementById('coPhone').value.trim();
  const err = document.getElementById('coErr1');

  if (!name) { err.textContent = '⚠ Please enter your full name.'; return; }
  if (!phone || phone.replace(/\D/g,'').length < 9) { err.textContent = '⚠ Please enter a valid phone number.'; return; }
  if (!selectedPayment) { err.textContent = '⚠ Please select a payment method.'; return; }
  err.textContent = '';

  document.getElementById('coRecap').innerHTML = `
    <strong>${name}</strong><br>
    📞 ${phone}<br>
    💳 ${selectedPayment} → <strong>${PAYMENT_ACCOUNTS[selectedPayment]}</strong><br>
    <br>
    Send <strong>${formatPrice(cartTotal())}</strong> to the account above, then paste the transaction ID below.`;

  document.getElementById('coStep1').style.display = 'none';
  document.getElementById('coStep2').style.display = 'block';
}

function goToStep1() {
  document.getElementById('coStep1').style.display = 'block';
  document.getElementById('coStep2').style.display = 'none';
}

async function submitOrder() {
  const txId = document.getElementById('coTxId').value.trim();
  const err = document.getElementById('coErr2');
  const btn = document.getElementById('coSubmitBtn');

  if (!txId) { err.textContent = '⚠ Please enter your transaction ID.'; return; }
  if (txId.length < 4) { err.textContent = '⚠ Transaction ID looks too short. Please check.'; return; }
  err.textContent = '';

  btn.disabled = true;
  btn.textContent = 'Placing order…';

  const name = document.getElementById('coName').value.trim();
  const phone = document.getElementById('coPhone').value.trim();
  const total = cartTotal();
  const orderData = {
    customerName: name,
    customerPhone: phone,
    paymentMethod: selectedPayment,
    transactionId: txId,
    totalAmount: total,
    items: cart.map(i => ({ no: i.no, name: i.name, brand: i.brand, qty: i.qty, price: i.price, size: i.size })),
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  };

  try {
    if (!db || firebaseConfig.apiKey === "YOUR_API_KEY") {
      throw new Error("Firebase database not initialized. Please update firebaseConfig.");
    }
    
    // Add a new document to the "orders" collection
    const docRef = await db.collection("orders").add(orderData);
    
    closeCheckout();
    const ref = 'DGU-' + docRef.id.slice(-6).toUpperCase();
    showSuccess(ref, name);
    cart = [];
    updateCartCount();
    
    // Reset button
    btn.disabled = false;
    btn.textContent = 'Place Order 🎉';
  } catch (error) {
    console.error("Error adding order document: ", error);
    err.textContent = '⚠ Error placing order. Please make sure Firebase is properly configured.';
    
    // Reset button
    btn.disabled = false;
    btn.textContent = 'Place Order 🎉';
  }
}

function showSuccess(ref, name) {
  document.getElementById('succMsg').textContent =
    `Thank you, ${name}! Your order has been received. We'll confirm once your payment is verified.`;
  document.getElementById('succRef').textContent = `Order Reference: ${ref}`;
  document.getElementById('successBackdrop').classList.add('open');
  document.getElementById('successModal').classList.add('open');
}

function closeSuccess() {
  document.getElementById('successBackdrop').classList.remove('open');
  document.getElementById('successModal').classList.remove('open');
}

// ── Patch openPanel to track current product & reset add btn ──
const _origOpenPanel = openPanel;
openPanel = function(no) {
  _origOpenPanel(no);
  currentPanelProduct = ALL.find(x => x.no === no) || null;
  const btn = document.getElementById('dpAddCartBtn');
  if (btn) {
    btn.classList.remove('added');
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Add to Cart`;
    if (currentPanelProduct && currentPanelProduct.price === 'N/A') {
      btn.style.opacity = '0.4';
      btn.title = 'Price on request — please call us';
    } else {
      btn.style.opacity = '1';
      btn.title = '';
    }
  }
};
