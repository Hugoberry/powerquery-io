---
title: Time.FromText
---

# Time.FromText


## Description

Egy időértéket hoz létre helyi, univerzális és egyéni időformátumokból.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Egy <code>time</code> típusú értéket hoz létre egy szöveges alakból (<code>text</code>). Megadható egy nem kötelező <code>record</code> paraméter (<code>options</code>) további tulajdonságok megadásához. A <code>record</code> az alábbi mezőket tartalmazhatja:<ul>   <li><code>Format</code>: A használandó formátumot jelző <code>text</code> érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy <code>null</code> érték megadása esetén az idő elemzése a legjobb lehetőség alapján történik.</li>   <li><code>Culture</code>: Ha a <code>Format</code> nem null értékű, a <code>Culture</code> vezérel egyes formátummegadókat. Az <code>"en-US"</code> esetén például a <code>"tt"</code> <code>"AM" or "PM"</code> lehet, míg az <code>"ar-EG"</code> esetén a <code>"tt"</code> <code>"ص" or "م"</code> lehet. Ha a <code>Format</code> <code>null</code> értékű, a <code>Culture</code> paraméter vezérli a használandó alapértelmezett formátumot. Ha a <code>Culture</code> <code>null</code> értékű vagy ki lett hagyva, a <code>Culture.Current</code> paramétert használja a rendszer.</li></ul>Az örökölt munkafolyamatok támogatásához a(z) <code>options</code> szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> értékű lenne.


## Examples

### Example #1 
A &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; érték konvertálása időértékre
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Az &lt;code&gt;&#34;1012&#34;&lt;/code&gt; érték konvertálása Idő értékre.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
A &lt;code&gt;&#34;10&#34;&lt;/code&gt; érték konvertálása Idő értékre.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
