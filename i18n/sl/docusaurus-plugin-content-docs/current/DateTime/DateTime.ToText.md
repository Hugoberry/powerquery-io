---
title: DateTime.ToText
---

# DateTime.ToText


## Description

Vrne predstavitev vrednosti &#34;datetime&#34; v obliki besedila.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Details

Vrne predstavitev podatkov <code>dateTime</code>. Izbirni parameter <code>record</code>, <code>options</code>, je lahko naveden za določanje dodatnih lastnosti. <code>culture</code> se uporablja le za podedovane poteke dela. <code>record</code> lahko vsebuje naslednja polja:<ul>   <li><code>Format</code>: vrednost <code>text</code> ponazarja obliko zapisa, ki jo želite uporabiti. Za več podrobnosti glejte https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete vrednost <code>null</code>, bo datum zapisan v privzeti obliki, navedeni za <code>Culture</code>.</li>   <li><code>Culture</code>: Če za <code>Format</code> ni izbrana vrednost nič, <code>Culture</code> nadzira nekatere določevalnike za obliko zapisa. Na primer, v <code>"en-US"</code> <code>""MMM"</code> je <code>"Jan", "Feb", "Mar" ...</code>, za <code>"ru-RU"</code> pa <code>"MMM"</code> predstavlja <code>"янв", "фев", "мар" ...</code>. Če je za <code>Format</code> izbrana vrednost <code>null</code>, <code>Culture</code> nadzira privzeto obliko zapisa, ki jo želite uporabiti. Če je za <code>Culture</code> izbrana vrednost <code>null</code> ali izpuščena, se uporabi <code>Culture.Current</code>.</li></ul>Za omogočanje podpore podedovanim potekom dela, sta <code>options</code> in <code>culture</code> morda lahko tudi besedilni vrednosti. To je enako, kot za <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Pretvorite &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25)&lt;/code&gt; v vrednost &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Rezultat se lahko razlikuje glede na trenutno kulturo.&lt;/i&gt;
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2 
Pretvorite z obliko zapisa po meri in uporabo nemške kulture.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3 
Pretvorite z vzorcem ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
