---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Indica se questo valore date rientra nel numero di anni successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'anno corrente.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel numero di anni successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'anno corrente.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.
-   `years`: numero di anni.


## Examples

### Example #1
Determina se l'anno dopo l'ora di sistema corrente rientra nei due anni successivi.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
