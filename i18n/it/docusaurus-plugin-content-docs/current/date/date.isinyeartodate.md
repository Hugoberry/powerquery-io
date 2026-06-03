---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Indica se la data rientra nell'anno corrente e se cade in corrispondenza del giorno corrente o prima, come determinato dalla data e dall'ora correnti del sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore specificato datetime `dateTime` rientra nell'anno corrente e se cade in corrispondenza del giorno corrente o prima, come determinato dalla data e dall'ora correnti del sistema.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.


## Examples

### Example #1
Determina se l'ora di sistema corrente cade da inizio anno a oggi.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
