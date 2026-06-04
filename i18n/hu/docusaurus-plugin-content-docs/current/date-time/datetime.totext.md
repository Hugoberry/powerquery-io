---
title: DateTime.ToText
---

# DateTime.ToText


A datetime értéket képviselő szöveges alakot adja vissza.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

A(z) `dateTime` szöveges alakját adja vissza. Megadható egy nem kötelező `record` paraméter (`options`) további tulajdonságok megadásához. `culture` csak örökölt munkafolyamatokhoz használatos. A `record` az alábbi mezőket tartalmazhatja:

-   `Format`: A használandó formátumot jelző `text` érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy `null` érték megadása esetén a dátum formázása a `Culture` paraméter által meghatározott alapértelmezett érték alapján történik.
-   `Culture`: Ha a `Format` nem null értékű, a `Culture` vezérel egyes formátummegadókat. Például az `"en-US"` `"MMM"` esetén `"Jan", "Feb", "Mar", ...`, míg a `"ru-RU"` `"MMM"` esetén `"янв", "фев", "мар", ...`. Amikor a `Format` `null`, a `Culture` a használandó alapértelmezett formátumot szabályozza. Ha a `Culture` `null` értékű vagy ki lett hagyva, a `Culture.Current` paramétert használja a rendszer.

Az örökölt munkafolyamatok támogatásához a(z) `options` és a(z) `culture` szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) `options = [Format = options, Culture = culture]` értékű lenne.


## Examples

### Example #1
A `#datetime(2010, 12, 31, 01, 30, 25)` konvertálása `text` értékre. *Az eredmény kimenete eltérő lehet az aktuális kulturális környezettől függően.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Konvertálás egyéni formátummal és a német kulturális környezet használatával.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Konvertálás az ISO 8601-mintával.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
