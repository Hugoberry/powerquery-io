---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Indica se questo valore date rientra nel mese successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel mese corrente.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel mese successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel mese corrente.

-   `dateTime`: valore `date`, `datetime` o `datetimezone`.


## Examples

### Example #1
Determina se il mese dopo l'ora di sistema corrente rientra nel mese successivo.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
