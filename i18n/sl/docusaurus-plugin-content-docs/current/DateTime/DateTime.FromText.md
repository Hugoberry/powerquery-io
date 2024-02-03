---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Ustvari &#34;datetimezone&#34; iz lokalnih in univerzalnih oblik &#34;datetime&#34;.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Ustvari vrednost <code>datetime</code> iz predstavitve podatkov v obliki besedila, <code>text</code>. Izbirni parameter <code>record</code>, <code>options</code>, je lahko naveden za določanje dodatnih lastnosti. <code>record</code> lahko vsebuje naslednja polja:<ul>   <li><code>Format</code>: vrednost <code>text</code> ponazarja obliko zapisa, ki jo želite uporabiti. Za več podrobnosti glejte https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete vrednost <code>null</code>, bo datum razčlenjen po najboljših močeh.</li>   <li><code>Culture</code> : če za <code>Format</code> ni izbrana vrednost nič, <code>Culture</code> nadzira nekatere določevalnike za obliko zapisa. Na primer <code>"en-US"</code> <code>"MMM"</code> je <code>"Jan", "Feb", "Mar" ...</code>, za <code>"ru-RU"</code> pa <code>"MMM"</code> prestavlja <code>"янв", "фев", "мар" ...</code>. Če je za <code>Format</code> izbrana vrednost <code>null</code>, <code>Culture</code> nadzira privzeto obliko zapisa, ki jo želite uporabiti. Če je za <code>Culture</code> izbrana vrednost <code>null</code> ali izpuščena, se uporabi <code>Culture.Current</code>.</li></ul>Za omogočanje podpore podedovanim potekom dela, je <code>options</code> morda lahko tudi besedilna vrednost. To je enako, kot za <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Pretvorite &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; v vrednost &#34;datetime&#34;.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Pretvorite &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; v vrednost &#34;datetime&#34;.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Pretvorite &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; v vrednost &#34;datetime&#34;.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Pretvorite &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; v vrednost &#34;datetime&#34;.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
