---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Udáva, či tento dátum pripadá na aktuálny mesiac, podľa určenia na základe aktuálneho dátumu a času v systéme.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Udáva, či daná hodnota dátumu a času `dateTime` pripadá na aktuálny mesiac, podľa určenia na základe aktuálneho dátumu a času v systéme.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.


## Examples

### Example #1
Určte, či sa aktuálny systémový čas nachádza v aktuálnom mesiaci.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
