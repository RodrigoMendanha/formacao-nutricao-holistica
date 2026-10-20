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
def foot(n,total,dark=True):
    return f'<div class="foot"><img src="{I}/logo-nutricao-holistica.png"><span>{n}/{total}</span></div>'
T=8
slides={
1:f'''<div class="s cover"><div class="kick gold">NUTRIÇÃO HOLÍSTICA</div><h1>Seu paciente não chega à consulta trazendo só o que come.</h1><div class="swipe">ARRASTE PARA O LADO →</div><div style="height:90px"></div>{foot(1,T)}</div>''',
2:f'''<div class="s dark"><div class="mid"><h2>Ele chega trazendo também:</h2><div class="chips"><span class="chip">rotina</span><span class="chip">sono</span><span class="chip">hábitos</span><span class="chip">emoções</span><span class="chip">crenças</span><span class="chip">relações</span><span class="chip">contexto</span><span class="chip">objetivos</span></div><p class="sub">E uma <span class="gold">história inteira</span>.</p></div>{foot(2,T)}</div>''',
3:f'''<div class="s cream"><div class="mid"><h2>A estratégia faz todo sentido no papel…</h2><div class="line"></div><p class="sub" style="margin-top:0">…mas a vida dele continua acontecendo depois que ele sai do consultório.</p></div>{foot(3,T)}</div>''',
4:f'''<div class="s dark"><div class="mid"><div class="kick gold">O PONTO É</div><h1>Alimentação nunca acontece isolada do resto da vida.</h1></div>{foot(4,T)}</div>''',
5:f'''<div class="s cream"><div class="mid"><h2>Por isso a Nutrição Holística <span class="gold">amplia o olhar</span>.</h2><div class="cols"><div class="col"><b>Corpo</b><span>alimentação, rotina, sono, hábitos</span></div><div class="col"><b>Mente</b><span>crenças, padrões, escolhas</span></div><div class="col"><b>Espírito</b><span>propósito, valores, direção</span></div></div></div>{foot(5,T)}</div>''',
6:f'''<div class="s deep"><div class="mid"><h2>Não são três caixas.</h2><p class="sub">São perspectivas diferentes sobre <span class="gold">a mesma pessoa</span>. O objetivo é evitar olhar apenas para uma delas.</p></div>{foot(6,T)}</div>''',
7:f'''<div class="s cream"><div class="mid"><div class="kick gold">E ATENÇÃO</div><h2>Holístico não significa místico.</h2><p class="sub">Ampliar o olhar não é abandonar a ciência nem substituir exames. É considerar que a pessoa é maior do que uma única variável.</p></div>{foot(7,T)}</div>''',
8:f'''<div class="s dark"><div class="mid" style="align-items:center;text-align:center"><img src="{I}/logo-nutricao-holistica.png" style="height:230px;margin-bottom:60px"><h2>Uma pessoa inteira não pode ser compreendida olhando apenas para uma parte dela.</h2><p class="sub">Salve este post para lembrar na próxima consulta.</p></div><div class="foot"><span></span><span>8/8</span></div></div>''',
"8-anuncio":f'''<div class="s dark"><div class="mid" style="align-items:center;text-align:center"><img src="{I}/logo-nutricao-holistica.png" style="height:230px;margin-bottom:60px"><h2>Uma pessoa inteira não pode ser compreendida olhando apenas para uma parte dela.</h2><p class="sub">Conheça a Formação em Nutrição Holística.</p><div class="cta" style="align-self:center">SAIBA MAIS</div></div><div class="foot"><span></span><span>8/8</span></div></div>''',
}
chrome="/opt/pw-browsers/chromium-1194/chrome-linux/chrome"
for k,body in slides.items():
    h=f"{S}/slide-{k}.html"
    open(h,"w").write(f'<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head><body>{body}</body></html>')
    name=f"slide-{int(k):02d}.png" if str(k).isdigit() else f"slide-08-anuncio.png"
    subprocess.run([chrome,"--headless","--no-sandbox","--disable-gpu","--allow-file-access-from-files","--hide-scrollbars","--window-size=1080,1600","--virtual-time-budget=3000",f"--screenshot={OUT}/{name}",f"file://{h}"],capture_output=True)
from PIL import Image
for f in os.listdir(OUT):
    if f.endswith('.png'):
        im=Image.open(f'{OUT}/{f}'); im.crop((0,0,1080,1350)).convert('RGB').save(f'{OUT}/{f}')
print(sorted(os.listdir(OUT)))
