---
title: Json.FromValue
---

# Json.FromValue


Берілген мәннің JSON көрінісін шығарады.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Берілген `value` мәнінің JSON көрінісін `encoding` арқылы көрсетілген мәтінді кодтау арқылы береді. Егер `encoding` көрсетілмесе, UTF8 пайдаланылады. Мәндер төмендегідей көрсетіледі:

-   Null, мәтін және логикалық мәндер тиісті JSON түрлері ретінде көрсетіледі
-   Сандар JSON пішімінде сандар түрінде көрсетіледі, бірақ `#infinity`, `-#infinity` және `#nan` null мәніне түрлендіріледі
-   Тізімдер JSON массивтері түрінде көрсетіледі
-   Жазбалар JSON нысандары түрінде көрсетіледі
-   Кестелер нысандар массиві түрінде көрсетіледі
-   Күндер, уақыттар, datetimes, datetimezones және ұзақтықтар ISO-8601 мәтіні түрінде көрсетіледі
-   Екілік мәндер base-64 кодталған мәтіні түрінде көрсетіледі
-   Түрлер мен функциялар қатеге алып келеді


## Examples

### Example #1
Күрделі мәнді JSON етіп өзгерту.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
