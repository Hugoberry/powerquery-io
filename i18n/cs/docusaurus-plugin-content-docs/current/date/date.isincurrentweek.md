---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Značí, zda toto datum spadá do aktuálního týdne určeného aktuálním datem a časem v systému.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Značí, zda předaná hodnota datetime `dateTime` spadá do aktuálního týdne určeného aktuálním datem a časem v systému.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určí, zda aktuální systémový čas spadá do aktuálního týdne.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
