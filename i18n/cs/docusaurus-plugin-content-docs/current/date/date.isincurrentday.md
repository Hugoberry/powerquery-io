---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Značí, zda toto datum odpovídá aktuálnímu dni určenému aktuálním datem a časem v systému.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Značí, zda předaná hodnota datetime `dateTime` odpovídá aktuálnímu dni určenému aktuálním datem a časem v systému.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určí, zda aktuální systémový čas spadá do aktuálního dne.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
