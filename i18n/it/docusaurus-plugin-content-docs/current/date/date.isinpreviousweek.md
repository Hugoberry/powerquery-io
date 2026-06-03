---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


Indica se questo valore date rientra nella settimana precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nella settimana corrente.


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nella settimana precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nella settimana corrente.

-   `dateTime`: valore `date`, `datetime` o `datetimezone`.


## Examples

### Example #1
Determina se la settimana prima dell'ora di sistema corrente rientra nella settimana precedente.
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
