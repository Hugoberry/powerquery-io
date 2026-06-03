---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Indica se questo valore date rientra nel numero di mesi successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel mese corrente.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel numero di mesi successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel mese corrente.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.
-   `months`: numero di mesi.


## Examples

### Example #1
Determina se il mese dopo l'ora di sistema corrente rientra nei due mesi successivi.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
