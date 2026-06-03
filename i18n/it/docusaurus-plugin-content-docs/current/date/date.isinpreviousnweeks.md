---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Indica se questo valore date rientra nel numero di settimane precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nella settimana corrente.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel numero di settimane precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nella settimana corrente.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` da valutare.
-   `weeks`: numero di settimane.


## Examples

### Example #1
Determina se la settimana prima dell'ora di sistema corrente rientra nelle due settimane precedenti.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
