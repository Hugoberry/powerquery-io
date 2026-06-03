---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Indica se questo valore di data/ora rientra nel minuto corrente, come determinato dalla data e dall'ora correnti del sistema.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore di data/ora specificato `dateTime` rientra nel minuto corrente, come determinato dalla data e dall'ora correnti del sistema.

-   `dateTime`: valore `datetime`, o valore `datetimezone` da valutare.


## Examples

### Example #1
Determinare se l'ora di sistema corrente rientra nel minuto corrente.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
