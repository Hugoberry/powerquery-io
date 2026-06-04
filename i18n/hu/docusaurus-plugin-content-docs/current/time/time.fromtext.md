---
title: Time.FromText
---

# Time.FromText


Egy időértéket hoz létre helyi, univerzális és egyéni időformátumokból.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Egy `time` típusú értéket hoz létre egy szöveges alakból (`text`). Megadható egy nem kötelező `record` paraméter (`options`) további tulajdonságok megadásához. A `record` az alábbi mezőket tartalmazhatja:

-   `Format`: A használandó formátumot jelző `text` érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy `null` érték megadása esetén az idő elemzése a legjobb lehetőség alapján történik.
-   `Culture`: Ha a `Format` nem null értékű, a `Culture` vezérel egyes formátummegadókat. Az `"en-US"` esetén például a `"tt"` `"AM" or "PM"` lehet, míg az `"ar-EG"` esetén a `"tt"` `"ص" or "م"` lehet. Amikor a `Format` `null`, a `Culture` a használandó alapértelmezett formátumot szabályozza. Ha a `Culture` `null` értékű vagy ki lett hagyva, a `Culture.Current` paramétert használja a rendszer.

Az örökölt munkafolyamatok támogatásához a(z) `options` szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) `options = [Format = null, Culture = options]` értékű lenne.


## Examples

### Example #1
A `"10:12:31am"` érték konvertálása időértékre
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Az `"1012"` érték konvertálása Idő értékre.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
A `"10"` érték konvertálása Idő értékre.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
