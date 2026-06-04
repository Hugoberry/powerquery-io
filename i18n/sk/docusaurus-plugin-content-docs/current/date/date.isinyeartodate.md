---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Udáva, či tento dátum pripadá na aktuálny rok a či sa nachádza v aktuálnom dni alebo pred ním, podľa určenia na základe aktuálneho dátumu a času v systéme.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Udáva, či daná hodnota dátumu a času `dateTime` pripadá na aktuálny rok a či sa nachádza v aktuálnom dni alebo pred ním, podľa určenia na základe aktuálneho dátumu a času v systéme.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.


## Examples

### Example #1
Určte, či sa aktuálny systémový čas nachádza v dátume od začiatku roka.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
