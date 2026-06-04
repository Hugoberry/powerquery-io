---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Egy datetimezone értéket hoz létre helyi, univerzális és egyéni datetimezone formátumokból.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Egy `datetimezone` típusú értéket hoz létre egy szöveges alakból (`text`). Megadható egy nem kötelező `record` paraméter (`options`) további tulajdonságok megadásához. A `record` az alábbi mezőket tartalmazhatja:

-   `Format`: A használandó formátumot jelző `text` érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy `null` érték megadása esetén a dátum elemzése a legjobb lehetőség alapján történik.
-   `Culture`: Ha a `Format` nem null értékű, a `Culture` vezérel egyes formátummegadókat. Például az `"en-US"` `"MMM"` esetén `"Jan", "Feb", "Mar", ...`, míg a `"ru-RU"` `"MMM"` esetén `"янв", "фев", "мар", ...`. Amikor a `Format` `null`, a `Culture` a használandó alapértelmezett formátumot szabályozza. Ha a `Culture` `null` értékű vagy ki lett hagyva, a `Culture.Current` paramétert használja a rendszer.

Az örökölt munkafolyamatok támogatásához a(z) `options` szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) `options = [Format = null, Culture = options]` értékű lenne.


## Examples

### Example #1
A `"2010-12-31T01:30:00-08:00"` érték konvertálása `datetimezone` típusú értékre.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Konvertálás egyéni formátummal és a német kulturális környezet használatával.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Konvertálás az ISO 8601 használatával.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
