---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Značí, zda toto datum spadá do aktuálního čtvrtletí určeného aktuálním datem a časem v systému.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Značí, zda předaná hodnota datetime `dateTime` spadá do aktuálního čtvrtletí určeného aktuálním datem a časem v systému.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určí, zda aktuální systémový čas spadá do aktuálního čtvrtletí.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
