---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Indica se la data rientra nel trimestre corrente, come determinato dalla data e dall'ora correnti del sistema.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel trimestre corrente, come determinato dalla data e dall'ora correnti del sistema.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.


## Examples

### Example #1
Determina se l'ora di sistema corrente rientra nel trimestre corrente.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
