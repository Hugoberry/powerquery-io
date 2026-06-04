---
title: DateTime.FromText
---

# DateTime.FromText


Létrehoz egy datetimezone értéket a helyi és univerzális datetime formátumokból.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Egy `datetime` típusú értéket hoz létre egy szöveges alakból (`text`). Megadható egy nem kötelező `record` paraméter (`options`) további tulajdonságok megadásához. A `record` az alábbi mezőket tartalmazhatja:

-   `Format`: A használandó formátumot jelző `text` érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy `null` érték megadása esetén a dátum elemzése a legjobb lehetőség alapján történik.
-   `Culture`: Ha a `Format` nem null értékű, a `Culture` vezérel egyes formátummegadókat. Például az `"en-US"` `"MMM"` esetén `"Jan", "Feb", "Mar", ...`, míg a `"ru-RU"` `"MMM"` esetén `"янв", "фев", "мар", ...`. Amikor a `Format` `null`, a `Culture` a használandó alapértelmezett formátumot szabályozza. Ha a `Culture` `null` értékű vagy ki lett hagyva, a `Culture.Current` paramétert használja a rendszer.

Az örökölt munkafolyamatok támogatásához a(z) `options` szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) `options = [Format = null, Culture = options]` értékű lenne.


## Examples

### Example #1
A `"2010-12-31T01:30:00"` érték konvertálása datetime értékre.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
A `"2010-12-31T01:30:00.121212"` érték konvertálása datetime értékre.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
A `"2010-12-31T01:30:00"` érték konvertálása datetime értékre.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
A `"20101231T013000"` érték konvertálása datetime értékre.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
