---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Určuje, jestli tato hodnota datetime spadá do aktuální sekundy vzhledem k aktuálnímu datu a času v systému.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Určuje, jestli předaná hodnota datetime `dateTime` spadá do aktuální sekundy vzhledem k aktuálnímu datu a času v systému.

-   `dateTime`: Hodnota `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určuje, jestli aktuální systémový čas spadá do aktuální sekundy.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
