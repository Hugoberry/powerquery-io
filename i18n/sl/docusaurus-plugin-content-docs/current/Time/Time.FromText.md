---
title: Time.FromText
---

# Time.FromText


## Description

Ustvari vrednost &#34;Time&#34; iz lokalnih in univerzalnih oblik &#34;Time&#34;.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Ustvari vrednost <code>time</code> iz predstavitve podatkov v obliki besedila, <code>text</code>. Izbirni parameter <code>record</code>, <code>options</code>, je lahko naveden za določanje dodatnih lastnosti. <code>record</code> lahko vsebuje naslednja polja:<ul>   <li><code>Format</code>: vrednost <code>text</code> ponazarja obliko zapisa, ki jo želite uporabiti. Podrobnosti so na voljo na spletnih mestih https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete vrednost <code>null</code>, je čas ustrezno razčlenjen.</li>   <li><code>Culture</code>: če za <code>Format</code> ni izbrana vrednost "null", <code>Culture</code> nadzira nekatere določitelje za obliko zapisa. Na primer <code>"en-US"</code> <code>"tt"</code> je <code>"AM" ali "PM"</code>, za <code>"ar-EG"</code> pa <code>"tt"</code> prestavlja <code>"ص" ali "م"</code>. Če je za <code>Format</code> izbrana vrednost <code>null</code>, <code>Culture</code> nadzira privzeto obliko zapisa, ki jo želite uporabiti. Če je za <code>Culture</code> izbrana vrednost <code>null</code> ali je ta izpuščena, je uporabljena vrednost <code>Culture.Current</code>.</li></ul>ZZa uporabo podedovanih potekov lahko element <code>options</code> prav tako vključuje besedilno vrednost. Vedenje je enako kot za <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Pretvorite &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; v vrednost &#34;Time&#34;.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Pretvorite &lt;code&gt;&#34;1012&#34;&lt;/code&gt; v vrednost &#34;Time&#34;.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Pretvorite &lt;code&gt;&#34;10&#34;&lt;/code&gt; v vrednost &#34;Time&#34;.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
