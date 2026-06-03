---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Indica se questo valore date rientra nel numero di trimestri successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel trimestre corrente.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel numero di trimestri successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel trimestre corrente.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.
-   `quarters`: numero di trimestri.


## Examples

### Example #1
Determina se il trimestre dopo l'ora di sistema corrente rientra nei due trimestri successivi.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
