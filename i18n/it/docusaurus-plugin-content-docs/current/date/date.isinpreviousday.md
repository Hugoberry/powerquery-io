---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


Indica se il valore date rientra nel giorno precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel giorno corrente.


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel giorno precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel giorno corrente.

-   `dateTime`: valore `date`, `datetime` o `datetimezone`.


## Examples

### Example #1
Determina se il giorno prima dell'ora di sistema corrente rientra nel giorno precedente.
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
