---
title: Time.ToText
---

# Time.ToText


Az időértéket képviselő szöveges alakot adja vissza.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

A(z) `time` szöveges alakját adja vissza. Megadható egy nem kötelező `record` paraméter (`options`) további tulajdonságok megadásához. `culture` csak örökölt munkafolyamatokhoz használatos. A `record` az alábbi mezőket tartalmazhatja:

-   `Format`: A használandó formátumot jelző `text` érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy `null` érték megadása esetén a dátum formázása a `Culture` paraméter által meghatározott alapértelmezett érték alapján történik.
-   `Culture`: Ha a `Format` nem null értékű, a `Culture` vezérel egyes formátummegadókat. Az `"en-US"` esetén például a `"tt"` `"AM" or "PM"` lehet, míg az `"ar-EG"` esetén a `"tt"` `"ص" or "م"` lehet. Amikor a `Format` `null`, a `Culture` a használandó alapértelmezett formátumot szabályozza. Ha a `Culture` `null` értékű vagy ki lett hagyva, a `Culture.Current` paramétert használja a rendszer.

Az örökölt munkafolyamatok támogatásához a(z) `options` és a(z) `culture` szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) `options = [Format = options, Culture = culture]` értékű lenne.


## Examples

### Example #1
A `#time(01, 30, 25)` konvertálása `text` értékre. *Az eredmény kimenete eltérő lehet az aktuális kulturális környezettől függően.*
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
