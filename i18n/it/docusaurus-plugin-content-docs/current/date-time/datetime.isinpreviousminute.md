---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


Indica se questo valore datetime rientra nel minuto precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel minuto corrente.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel minuto precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel minuto corrente.

-   `dateTime`: valore `datetime` o `datetimezone` da valutare.


## Examples

### Example #1
Determinare se il minuto prima dell'ora di sistema corrente rientra nel minuto precedente.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
