---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Určuje, jestli tato hodnota datetime spadá do aktuální hodiny vzhledem k aktuálnímu systémovému datu a času.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Určuje, jestli předaná hodnota datetime `dateTime` spadá do aktuální hodiny vzhledem k aktuálnímu systémovému datu a času.

-   `dateTime`: Hodnota `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určuje, jestli aktuální systémový čas spadá do aktuální hodiny.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
