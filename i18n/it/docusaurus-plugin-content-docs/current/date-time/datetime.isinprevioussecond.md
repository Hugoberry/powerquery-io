---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Indica se questo valore datetime rientra nel secondo precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel secondo corrente.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Indica se questo valore datetime specificato `dateTime` rientra nel secondo precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel secondo corrente.

-   `dateTime`: valore `datetime` o `datetimezone` da valutare.


## Examples

### Example #1
Determinare se il secondo prima dell'ora di sistema corrente rientra nel secondo precedente.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
