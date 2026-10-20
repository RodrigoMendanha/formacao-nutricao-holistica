import os, subprocess
R="/home/user/formacao-nutricao-holistica"
F=f"file://{R}/public/fonts"; I=f"file://{R}/public/img"
OUT=f"{R}/copy/carrosseis/C01"; S="/tmp/claude-0/-home-user-formacao-nutricao-holistica/fd148a9d-6120-58be-9670-7f8e7849fc7b/scratchpad"
CSS=f"""
@font-face{{font-family:Astrid;src:url({F}/Astrid.ttf)}}
@font-face{{font-family:Mont;font-weight:400;src:url({F}/montserrat-400-latin.woff2)}}
@font-face{{font-family:Mont;font-weight:500;src:url({F}/montserrat-500-latin.woff2)}}
@font-face{{font-family:Mont;font-weight:600;src:url({F}/montserrat-600-latin.woff2)}}
@font-face{{font-family:Mont;font-weight:700;src:url({F}/montserrat-700-latin.woff2)}}
*{{margin:0;padding:0;box-sizing:border-box}}
html,body{{width:1080px;height:1350px;overflow:hidden}}
.s{{position:relative;width:1080px;height:1350px;padding:110px 96px;display:flex;flex-direction:column;font-family:Mont,sans-serif}}
.dark{{background:radial-gradient(120% 90% at 50% 0%,#0b2a24 0%,#030f11 60%);color:#f5f2ea}}
.cream{{background:#faf8f3;color:#1a1c13}}
.deep{{background:#002721;color:#f5f2ea}}
h1,h2{{font-family:Astrid,serif;font-weight:400;line-height:1.12}}
h1{{font-size:92px}} h2{{font-size:78px}}
.gold{{color:#c9a15b}} .cream .gold{{color:#a36b22}}
p.sub{{font-size:38px;line-height:1.45;font-weight:500;margin-top:44px}}
.cream p.sub{{color:#3b4440}} .dark p.sub,.deep p.sub{{color:#e9e3d6}}
.kick{{font-weight:700;font-size:24px;letter-spacing:.22em;margin-bottom:34px}}
.foot{{position:absolute;left:96px;right:96px;bottom:48px;display:flex;justify-content:space-between;align-items:center;font-size:22px;font-weight:600;letter-spacing:.12em}}
.foot span{{opacity:.7}}
.foot img{{height:100px}}
.line{{width:120px;height:4px;background:#a36b22;margin:46px 0}}
.mid{{flex:1;display:flex;flex-direction:column;justify-content:center}}
.chips{{display:flex;flex-wrap:wrap;gap:18px;margin-top:48px}}
.chip{{border:2px solid #a36b22;color:#f5f2ea;border-radius:60px;padding:16px 30px;font-size:32px;font-weight:600}}
.cols{{display:flex;flex-direction:column;gap:26px;margin-top:50px}}
.col{{background:#fff;border:2px solid #e6ddcb;border-left:8px solid #a36b22;border-radius:18px;padding:30px 36px}}
.col b{{font-family:Astrid,serif;font-weight:400;font-size:46px;color:#002721;display:block;margin-bottom:6px}}
.col span{{font-size:31px;color:#3b4440;font-weight:500}}
.cover{{background:#030f11 url({I}/banner_rodrigo.jpg) center 18%/cover;color:#fff;justify-content:flex-end}}
.cover:before{{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(3,15,17,0) 25%,rgba(3,15,17,.82) 58%,#030f11 85%)}}
.cover>*{{position:relative}}
.cover>.foot{{position:absolute}}
.cta{{margin-top:56px;display:inline-block;background:#c08a30;color:#fff;font-weight:700;font-size:32px;letter-spacing:.06em;padding:28px 48px;border-radius:70px;align-self:flex-start}}
.swipe{{font-size:28px;font-weight:700;letter-spacing:.18em;color:#c9a15b;margin-top:46px}}
"""

def foot(n,T,logo=True):
    l=f'<img src="{I}/logo-nutricao-holistica.png">' if logo else '<span></span>'
    return f'<div class="foot">{l}<span>{n}/{T}</span></div>'
X=f"""
.cover.hero2{{background:#dfe3e6 url({I}/banner_hero.JPG) 72% center/cover}}
.cover.mount{{background:#030f11 url({I}/banner_rodrigo.jpg) center 18%/cover}}
.orn{{background:#faf8f3 url(file:///home/user/formacao-nutricao-holistica/copy/carrosseis/_assets/orn-dourado.png) center calc(100% - 150px)/100% auto no-repeat;color:#1a1c13}}
.orn2{{background:#faf8f3 url(file:///home/user/formacao-nutricao-holistica/copy/carrosseis/_assets/orn-salvia.png) center calc(100% - 150px)/100% auto no-repeat;color:#1a1c13}}
.orn .gold,.orn2 .gold{{color:#a36b22}}
.orn p.sub,.orn2 p.sub{{color:#3b4440}}
.lead{{font-size:40px;line-height:1.4;font-weight:500;margin-bottom:34px;opacity:.9}}
.h2m{{font-size:64px!important}}
.biglogo{{height:200px;margin-bottom:56px}}
.tri{{font-weight:700;font-size:30px;letter-spacing:.24em;margin-top:40px}}
.giant{{font-size:120px!important}}
"""
SQ="""html,body{height:1080px!important}.s{height:1080px!important;padding:80px 84px!important}h1{font-size:72px!important}h2{font-size:58px!important}.h2m{font-size:52px!important}.giant{font-size:100px!important}p.sub{font-size:31px!important;margin-top:28px!important}.lead{font-size:32px!important;margin-bottom:22px!important}.chips{margin-top:30px!important;gap:12px!important}.chip{font-size:27px!important;padding:11px 22px!important}.foot{bottom:34px!important;left:84px!important;right:84px!important}.foot img{height:78px!important}.cta{margin-top:32px!important;padding:20px 40px!important;font-size:27px!important}.kick{margin-bottom:20px!important}.swipe{margin-top:28px!important}.biglogo{height:150px!important;margin-bottom:36px!important}.tri{margin-top:26px!important;font-size:25px!important}.cover.mount{background-position:center 12%!important}.orn2{background-position:center calc(100% - 120px)!important}.orn{background-position:center calc(100% + 90px)!important}.orn .foot{display:none}.orn,.orn2{background-size:100% auto!important}"""
SW='<div class="swipe">ARRASTE PARA O LADO →</div><div style="height:70px"></div>'
def fin(cls,inner,T,cta):
    c='<div class="cta" style="align-self:center">SAIBA MAIS</div>' if cta else ''
    return f'<div class="s {cls}"><div class="mid" style="align-items:center;text-align:center"><img class="biglogo" src="{I}/logo-nutricao-holistica.png">{inner}{c}</div><div class="foot"><span></span><span>{T}/{T}</span></div></div>'
C={
"C03":{
1:f'<div class="s cover hero2"><div class="kick gold">NUTRIÇÃO HOLÍSTICA</div><h1>Você já terminou uma consulta com informação demais e <span class="gold">direção de menos?</span></h1>{SW}{foot(1,5)}</div>',
2:f'<div class="s dark"><div class="mid"><h2 class="h2m">Você escuta rotina, sintomas, comportamento, dificuldades, objetivos, contexto…</h2><p class="sub">e tudo isso faz sentido <span class="gold">isoladamente</span>.</p></div>{foot(2,5)}</div>',
3:f'<div class="s cream"><div class="mid"><p class="lead">O problema aparece depois:</p><h1>como conectar tudo e decidir o que merece <span class="gold">foco agora?</span></h1></div>{foot(3,5)}</div>',
4:f'<div class="s dark"><div class="mid"><h1>Uma consulta pode ser profunda e ainda assim deixar <span class="gold">informação solta</span>.</h1></div>{foot(4,5)}</div>',
"5":lambda cta: fin("deep",'<h2>Profundidade sem estrutura vira complexidade.</h2><p class="sub">É justamente aí que começa a proposta da Nutrição Holística.</p>',5,cta)},
"C04":{
1:f'<div class="s cover mount"><div class="kick gold">NUTRIÇÃO HOLÍSTICA</div><h1>O paciente não chega com um problema isolado. Ele chega com <span class="gold">uma vida inteira.</span></h1>{SW}{foot(1,5)}</div>',
2:f'<div class="s dark"><div class="mid"><h2>Alimentação convive com:</h2><div class="chips"><span class="chip">rotina</span><span class="chip">sono</span><span class="chip">comportamento</span><span class="chip">emoções</span><span class="chip">crenças</span><span class="chip">ambiente</span><span class="chip">contexto</span></div></div>{foot(2,5)}</div>',
3:f'<div class="s cream"><div class="mid"><p class="lead">Por isso,</p><h2>duas pessoas podem apresentar o mesmo comportamento alimentar por <span class="gold">motivos completamente diferentes</span>.</h2></div>{foot(3,5)}</div>',
4:f'<div class="s dark"><div class="mid"><p class="lead">Olhar de forma integral não significa perguntar tudo sobre tudo.</p><h1>Significa saber <span class="gold">onde aprofundar</span>.</h1></div>{foot(4,5)}</div>',
"5":lambda cta: fin("deep",'<h2>Nutrição Holística é ampliar o olhar sem perder a direção.</h2><div class="tri gold">CORPO · MENTE · ESPÍRITO</div>',5,cta)},
"C05":{
1:f'<div class="s orn"><div class="mid" style="justify-content:flex-start;padding-top:120px"><div class="kick gold">NUTRIÇÃO HOLÍSTICA</div><h1 class="giant">Holístico não significa <span class="gold">místico.</span></h1><div class="swipe" style="color:#a36b22">ARRASTE PARA O LADO →</div></div>{foot(1,5)}</div>',
2:f'<div class="s dark"><div class="mid"><p class="lead">Na Nutrição Holística, olhar de forma integral</p><h2>não significa abandonar <span class="gold">ciência, exames ou raciocínio profissional</span>.</h2></div>{foot(2,5)}</div>',
3:f'<div class="s orn2"><div class="mid" style="justify-content:flex-start;padding-top:90px"><p class="lead">Significa reconhecer que</p><h2 class="h2m">alimentação, rotina, comportamento, contexto e significado <span class="gold">não vivem separados</span> na vida real.</h2></div>{foot(3,5)}</div>',
4:f'<div class="s dark"><div class="mid"><h2><span class="gold">Corpo, Mente e Espírito</span> são perspectivas para ampliar a observação</h2><p class="sub">— não diagnósticos.</p></div>{foot(4,5)}</div>',
"5":lambda cta: fin("deep",'<h2>Ampliar o olhar não é substituir a nutrição.</h2><p class="sub" style="font-family:Astrid,serif;font-size:52px;line-height:1.2;color:#c9a15b">É compreender melhor a pessoa que está na sua frente.</p>',5,cta)},
}
chrome="/opt/pw-browsers/chromium-1194/chrome-linux/chrome"
from PIL import Image
for cid,sl in C.items():
    items=[(str(k),v) for k,v in sl.items() if k!="5"]+[("5-organico",sl["5"](False)),("5-anuncio",sl["5"](True))]
    for fmt,(H,dirn,extra) in {"45":(1350,"4x5",""),"11":(1080,"1x1",SQ)}.items():
        od=f"{R}/copy/carrosseis/{cid}/{dirn}"; os.makedirs(od,exist_ok=True)
        for k,body in items:
            h=f"{S}/{cid}-{fmt}-{k}.html"
            open(h,"w").write(f'<!doctype html><html><head><meta charset="utf-8"><style>{CSS}{X}{extra}</style></head><body>{body}</body></html>')
            out=f"{od}/cartao-{k}.png"
            subprocess.run([chrome,"--headless","--no-sandbox","--disable-gpu","--allow-file-access-from-files","--hide-scrollbars","--window-size=1080,1600","--virtual-time-budget=3000",f"--screenshot={out}",f"file://{h}"],capture_output=True)
            Image.open(out).crop((0,0,1080,H)).convert("RGB").save(out)
    print(cid,"ok")
