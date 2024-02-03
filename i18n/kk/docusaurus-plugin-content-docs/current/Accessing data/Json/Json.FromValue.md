---
title: Json.FromValue
---

# Json.FromValue


## Description

Берілген мәннің JSON көрінісін шығарады.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Берілген <code>value</code> мәнінің JSON көрінісін <code>encoding</code> арқылы көрсетілген мәтінді кодтау арқылы береді. Егер <code>encoding</code> көрсетілмесе, UTF8 пайдаланылады. Мәндер төмендегіше көрсетіледі:<br /> <ul>        <li>Null, мәтін және логикалық мәндер тиісті JSON түрлері ретінде көрсетіледі</li>        <li>Сандар JSON пішімінде сандар түрінде көрсетіледі, бірақ <code>#infinity</code>, <code>-#infinity</code> және <code>#nan</code> null мәніне түрлендіріледі</li>        <li>Тізімдер JSON массивтері түрінде көрсетіледі</li>        <li>Жазбалар JSON нысандары түрінде көрсетіледі</li>        <li>Кестелер нысандар массиві түрінде көрсетіледі</li>        <li>Күндер, уақыттар, datetimes, datetimezones және ұзақтықтар ISO-8601 мәтіні түрінде көрсетіледі</li>        <li>Екілік мәндер base-64 кодталған мәтіні түрінде көрсетіледі</li>        <li>Түрлер мен функциялар қатеге алып келеді</li> </ul>    


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
