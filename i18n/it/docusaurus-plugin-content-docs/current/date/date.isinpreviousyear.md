---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Indica se questo valore date rientra nell'anno precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'anno corrente.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nell'anno precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'anno corrente.

-   `dateTime`: valore `date`, `datetime` o `datetimezone`.


## Examples

### Example #1
Determina se l'anno prima dell'ora di sistema corrente rientra nell'anno precedente.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
