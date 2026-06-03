---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Indica se questo valore date rientra nel giorno successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel giorno corrente.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel giorno successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel giorno corrente.

-   `dateTime`: valore `date`, `datetime` o `datetimezone`.


## Examples

### Example #1
Determina se il giorno dopo l'ora di sistema corrente rientra nel giorno successivo.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
