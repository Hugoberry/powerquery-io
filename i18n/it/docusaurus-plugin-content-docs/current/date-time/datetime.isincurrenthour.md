---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indica se questo valore di data/ora rientra nell'ora corrente, come determinato dalla data e dall'ora correnti del sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore di data/ora specificato `dateTime` rientra nell'ora corrente, come determinato dalla data e dall'ora correnti del sistema.

-   `dateTime`: valore `datetime`, o valore `datetimezone` da valutare.


## Examples

### Example #1
Determinare se l'ora di sistema corrente rientra nell'ora corrente.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
