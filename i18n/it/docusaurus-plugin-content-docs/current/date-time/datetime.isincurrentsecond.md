---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Indica se questo valore di data/ora rientra nel secondo corrente, come determinato dalla data e dall'ora correnti del sistema.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore di data/ora specificato `dateTime` rientra nel secondo corrente, come determinato dalla data e dall'ora correnti del sistema.

-   `dateTime`: valore `datetime`, o valore `datetimezone` da valutare.


## Examples

### Example #1
Determinare se l'ora di sistema corrente rientra nel secondo corrente.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
