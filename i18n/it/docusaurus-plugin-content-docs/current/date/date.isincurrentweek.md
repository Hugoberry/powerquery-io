---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Indica se la data rientra nella settimana corrente, come determinato dalla data e dall'ora correnti del sistema.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nella settimana corrente, come determinato dalla data e dall'ora correnti del sistema.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.


## Examples

### Example #1
Determina se l'ora di sistema corrente rientra nella settimana corrente.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
