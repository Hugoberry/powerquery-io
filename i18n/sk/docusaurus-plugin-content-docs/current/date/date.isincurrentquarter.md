---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Udáva, či tento dátum pripadá na aktuálny štvrťrok, podľa určenia na základe aktuálneho dátumu a času v systéme.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Udáva, či daná hodnota dátumu a času `dateTime` pripadá na aktuálny štvrťrok, podľa určenia na základe aktuálneho dátumu a času v systéme.

-   `dateTime`: Hodnota `date`, `datetime` alebo `datetimezone`, ktorá sa má vyhodnotiť.


## Examples

### Example #1
Určte, či sa aktuálny systémový čas nachádza v aktuálnom štvrťroku.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
