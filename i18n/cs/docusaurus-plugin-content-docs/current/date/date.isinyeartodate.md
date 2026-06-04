---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Značí, zda toto datum spadá do aktuálního roku a následuje nebo předchází aktuálnímu dni podle aktuálního data a času v systému.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Značí, zda předaná hodnota datetime `dateTime` spadá do aktuálního roku a následuje nebo předchází aktuálnímu dni podle aktuálního data a času v systému.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určí, zda aktuální systémový čas spadá do roku končícího aktuálním datem.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
