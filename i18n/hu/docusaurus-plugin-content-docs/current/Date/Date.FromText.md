---
title: Date.FromText
---

# Date.FromText


## Description

Egy dátumértéket hoz létre helyi, univerzális és egyéni dátumformátumokból.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Egy <code>date</code> típusú értéket hoz létre egy szöveges alakból (<code>text</code>). Megadható egy nem kötelező <code>record</code> paraméter (<code>options</code>) további tulajdonságok megadásához. A <code>record</code> az alábbi mezőket tartalmazhatja:<ul>   <li><code>Format</code>: A használandó formátumot jelző <code>text</code> érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy <code>null</code> érték megadása esetén a dátum elemzése a legjobb lehetőség alapján történik.</li>   <li><code>Culture</code>: Ha a <code>Format</code> nem null értékű, a <code>Culture</code> vezérel egyes formátummegadókat. Az <code>"en-US"</code> esetén például az <code>"MMM"</code> <code>"Jan", "Feb", "Mar", ...</code> lehet, míg a <code>"ru-RU"</code> esetén az <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> lehet. Ha a <code>Format</code> <code>null</code> értékű, a <code>Culture</code> paraméter vezérli a használandó alapértelmezett formátumot. Ha a <code>Culture</code> <code>null</code> értékű vagy ki lett hagyva, a <code>Culture.Current</code> paramétert használja a rendszer.</li></ul>Az örökölt munkafolyamatok támogatásához a(z) <code>options</code> szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> értékű lenne.


## Examples

### Example #1 
A &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; érték konvertálása &lt;code&gt;date&lt;/code&gt; értékre.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Konvertálás egyéni formátummal és a német kulturális környezet használatával.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Megkeresi azt a dátumot a Gergely-naptárban, amely az iszlám naptárban 1400. kezdetének felel meg.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
