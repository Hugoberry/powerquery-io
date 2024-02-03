---
title: Date.FromText
---

# Date.FromText


## Description

Ustvari datum iz lokalnih, univerzalnih in datumskih oblik po meri.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Ustvari vrednost <code>date</code> iz predstavitve podatkov v obliki besedila, <code>text</code>. Izbirni parameter <code>record</code>, <code>options</code>, je lahko naveden za določanje dodatnih lastnosti. <code>record</code> lahko vsebuje naslednja polja:<ul>   <li><code>Format</code>: vrednost <code>text</code> ponazarja obliko zapisa, ki jo želite uporabiti. Za več podrobnosti glejte https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete vrednost <code>null</code>, bo datum razčlenjen po najboljših močeh.</li>   <li><code>Culture</code> : če za <code>Format</code> ni izbrana vrednost nič, <code>Culture</code> nadzira nekatere določevalnike za obliko zapisa. Na primer <code>"en-US"</code> <code>"MMM"</code> je <code>"Jan", "Feb", "Mar" ...</code>, za <code>"ru-RU"</code> pa <code>"MMM"</code> prestavlja <code>"янв", "фев", "мар" ...</code>. Če je za <code>Format</code> izbrana vrednost <code>null</code>, <code>Culture</code> nadzira privzeto obliko zapisa, ki jo želite uporabiti. Če je za <code>Culture</code> izbrana vrednost <code>null</code> ali izpuščena, se uporabi <code>Culture.Current</code>.</li></ul>Za omogočanje podpore podedovanim potekom dela, je <code>options</code> morda lahko tudi besedilna vrednost. To je enako, kot za <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Pretvorite &lt;code&gt;2010-12-31&lt;/code&gt; v vrednost &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Pretvorite z obliko zapisa po meri in uporabo nemške kulture.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Poiščite datum v gregorijanskem koledarju, ki ustreza začetku leta 1400 v koledarju Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
