---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Indica se la data rientra nel giorno corrente, come determinato dalla data e dall'ora correnti del sistema.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel giorno corrente, come determinato dalla data e dall'ora correnti del sistema.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.


## Examples

### Example #1
Determina se l'ora di sistema corrente rientra nel giorno corrente.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
