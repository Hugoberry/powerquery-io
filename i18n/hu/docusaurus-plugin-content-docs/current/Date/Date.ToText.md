---
title: Date.ToText
---

# Date.ToText


## Description

A dátumértéket képviselő szöveges alakot adja vissza.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

A(z) <code>date</code> szöveges alakját adja vissza. Megadható egy nem kötelező <code>record</code> paraméter (<code>options</code>) további tulajdonságok megadásához. A(z) <code>culture</code> csak örökölt munkafolyamatok esetén használható. A <code>record</code> az alábbi mezőket tartalmazhatja:<ul>   <li><code>Format</code>: A használandó formátumot jelző <code>text</code> érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy <code>null</code> érték megadása esetén a dátum formázása a <code>Culture</code> paraméter által meghatározott alapértelmezett érték alapján történik.</li>   <li><code>Culture</code>: Ha a <code>Format</code> nem null értékű, a <code>Culture</code> vezérel egyes formátummegadókat. Az <code>"en-US"</code> esetén például az <code>"MMM"</code> <code>"Jan", "Feb", "Mar", ...</code> lehet, míg a <code>"ru-RU"</code> esetén az <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> lehet. Ha a <code>Format</code> <code>null</code> értékű, a <code>Culture</code> paraméter vezérli a használandó alapértelmezett formátumot. Ha a <code>Culture</code> <code>null</code> értékű vagy ki lett hagyva, a <code>Culture.Current</code> paramétert használja a rendszer.</li></ul>Az örökölt munkafolyamatok támogatásához a(z) <code>options</code> és a(z) <code>culture</code> szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> értékű lenne.


## Examples

### Example #1 
A &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; konvertálása &lt;code&gt;text&lt;/code&gt; értékre. &lt;i&gt;Az eredmény kimenete eltérő lehet az aktuális kulturális környezettől függően.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Konvertálás egyéni formátummal és a német kulturális környezet használatával.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Megkeresi azt az évet az iszlám naptárban, amely a Gergely-naptárban 2000. január 1-nek felel meg.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
