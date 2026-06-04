---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Určuje, jestli tato hodnota datetime spadá do aktuální minuty vzhledem k aktuálnímu datu a času v systému.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Určuje, jestli předaná hodnota datetime `dateTime` spadá do aktuální minuty vzhledem k aktuálnímu datu a času v systému.

-   `dateTime`: Hodnota `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určuje, jestli aktuální systémový čas spadá do aktuální minuty.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
