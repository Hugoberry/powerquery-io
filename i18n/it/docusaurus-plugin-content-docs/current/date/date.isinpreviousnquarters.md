---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


Indica se questo valore date rientra nel numero di trimestri precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel trimestre corrente.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel numero di trimestri precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel trimestre corrente.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.
-   `quarters`: numero di trimestri.


## Examples

### Example #1
Determina se il trimestre prima dell'ora di sistema corrente rientra nei due trimestri precedenti.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
