---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Indica se la data rientra nell'anno corrente, come determinato dalla data e dall'ora correnti del sistema.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nell'anno corrente, come determinato dalla data e dall'ora correnti del sistema.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.


## Examples

### Example #1
Determina se l'ora di sistema corrente rientra nell'anno corrente.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
