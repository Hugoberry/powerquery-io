---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Ustvari &#34;datetimezone&#34; iz lokalnih, univerzalnih in oblik &#34;datetimezone&#34; po meri.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Ustvari vrednost <code>datetimezone</code> iz predstavitve podatkov v obliki besedila, <code>text</code>. Izbirni parameter <code>record</code>, <code>options</code>, je lahko naveden za določanje dodatnih lastnosti. <code>record</code> lahko vsebuje naslednja polja:<ul>   <li><code>Format</code>: vrednost <code>text</code> ponazarja obliko zapisa, ki jo želite uporabiti. Za več podrobnosti glejte https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete vrednost <code>null</code>, bo datum razčlenjen po najboljših močeh.</li>   <li><code>Culture</code> : če za <code>Format</code> ni izbrana vrednost nič, <code>Culture</code> nadzira nekatere določevalnike za obliko zapisa. Na primer <code>"en-US"</code> <code>"MMM"</code> je <code>"Jan", "Feb", "Mar" ...</code>, za <code>"ru-RU"</code> pa <code>"MMM"</code> prestavlja <code>"янв", "фев", "мар" ...</code>. Če je za <code>Format</code> izbrana vrednost <code>null</code>, <code>Culture</code> nadzira privzeto obliko zapisa, ki jo želite uporabiti. Če je za <code>Culture</code> izbrana vrednost <code>null</code> ali izpuščena, se uporabi <code>Culture.Current</code>.</li></ul>Za omogočanje podpore podedovanim potekom dela, je <code>options</code> morda lahko tudi besedilna vrednost. To je enako, kot za <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Pretvorite &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; v vrednost &#34;&lt;code&gt;datetimezone&lt;/code&gt;&#34;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Pretvorite z obliko zapisa po meri in uporabo nemške kulture.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Pretvorite s protokolom ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
