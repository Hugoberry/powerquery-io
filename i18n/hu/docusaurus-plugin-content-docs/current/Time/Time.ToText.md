---
title: Time.ToText
---

# Time.ToText


## Description

Az időértéket képviselő szöveges alakot adja vissza.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

A(z) <code>time</code> szöveges alakját adja vissza. Megadható egy nem kötelező <code>record</code> paraméter (<code>options</code>) további tulajdonságok megadásához. A(z) <code>culture</code> csak örökölt munkafolyamatok esetén használható. A <code>record</code> az alábbi mezőket tartalmazhatja:<ul>   <li><code>Format</code>: A használandó formátumot jelző <code>text</code> érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy <code>null</code> érték megadása esetén a dátum formázása a <code>Culture</code> paraméter által meghatározott alapértelmezett érték alapján történik.</li>   <li><code>Culture</code>: Ha a <code>Format</code> nem null értékű, a <code>Culture</code> vezérel egyes formátummegadókat. Az <code>"en-US"</code> esetén például a <code>"tt"</code> <code>"AM" or "PM"</code> lehet, míg az <code>"ar-EG"</code> esetén a <code>"tt"</code> <code>"ص" or "م"</code> lehet. Ha a <code>Format</code> <code>null</code> értékű, a <code>Culture</code> paraméter vezérli a használandó alapértelmezett formátumot. Ha a <code>Culture</code> <code>null</code> értékű vagy ki lett hagyva, a <code>Culture.Current</code> paramétert használja a rendszer.</li></ul>Az örökölt munkafolyamatok támogatásához a(z) <code>options</code> és a(z) <code>culture</code> szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> értékű lenne.


## Examples

### Example #1 
A &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; konvertálása &lt;code&gt;text&lt;/code&gt; értékre. &lt;i&gt;Az eredmény kimenete eltérő lehet az aktuális kulturális környezettől függően.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Konvertálás egyéni formátummal és a német kulturális környezet használatával.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Konvertálás szabványos időformátummal.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
