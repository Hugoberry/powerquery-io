---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Značí, zda toto datum spadá do aktuálního měsíce určeného aktuálním datem a časem v systému.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Značí, zda předaná hodnota datetime `dateTime` spadá do aktuálního měsíce určeného aktuálním datem a časem v systému.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určí, zda aktuální systémový čas spadá do aktuálního měsíce.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
