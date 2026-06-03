---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Indica se questo valore date rientra nel numero di giorni successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel giorno corrente.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel numero di giorni successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel giorno corrente.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.
-   `days`: numero di giorni.


## Examples

### Example #1
Determina se il giorno dopo l'ora di sistema corrente rientra nei due giorni successivi.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
