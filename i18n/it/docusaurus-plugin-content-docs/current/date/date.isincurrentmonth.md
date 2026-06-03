---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Indica se la data rientra nel mese corrente, come determinato dalla data e dall'ora correnti del sistema.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel mese corrente, come determinato dalla data e dall'ora correnti del sistema.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.


## Examples

### Example #1
Determina se l'ora di sistema corrente rientra nel mese corrente.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
