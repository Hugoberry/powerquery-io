---
title: Date.ToText
---

# Date.ToText


A dátumértéket képviselő szöveges alakot adja vissza.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

A(z) `date` szöveges alakját adja vissza. Megadható egy nem kötelező `record` paraméter (`options`) további tulajdonságok megadásához. `culture` csak örökölt munkafolyamatokhoz használatos. A `record` az alábbi mezőket tartalmazhatja:

-   `Format`: A használandó formátumot jelző `text` érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy `null` érték megadása esetén a dátum formázása a `Culture` paraméter által meghatározott alapértelmezett érték alapján történik.
-   `Culture`: Ha a `Format` nem null értékű, a `Culture` vezérel egyes formátummegadókat. Például az `"en-US"` `"MMM"` esetén `"Jan", "Feb", "Mar", ...`, míg a `"ru-RU"` `"MMM"` esetén `"янв", "фев", "мар", ...`. Amikor a `Format` `null`, a `Culture` a használandó alapértelmezett formátumot szabályozza. Ha a `Culture` `null` értékű vagy ki lett hagyva, a `Culture.Current` paramétert használja a rendszer.

Az örökölt munkafolyamatok támogatásához a(z) `options` és a(z) `culture` szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) `options = [Format = options, Culture = culture]` értékű lenne.


## Examples

### Example #1
A `#date(2010, 12, 31)` konvertálása `text` értékre. *Az eredmény kimenete eltérő lehet az aktuális kulturális környezettől függően.*
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
