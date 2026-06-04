---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Značí, zda toto datum spadá do aktuálního roku určeného aktuálním datem a časem v systému.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Značí, zda předaná hodnota datetime `dateTime` spadá do aktuálního roku určeného aktuálním datem a časem v systému.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určí, zda aktuální systémový čas spadá do aktuálního roku.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
