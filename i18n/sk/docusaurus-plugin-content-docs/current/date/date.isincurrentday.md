---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Udáva, či tento dátum pripadá na aktuálny deň, podľa určenia na základe aktuálneho dátumu a času v systéme.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Udáva, či daná hodnota dátumu a času `dateTime` pripadá na aktuálny deň, podľa určenia na základe aktuálneho dátumu a času v systéme.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.


## Examples

### Example #1
Určte, či sa aktuálny systémový čas nachádza v aktuálnom dni.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
