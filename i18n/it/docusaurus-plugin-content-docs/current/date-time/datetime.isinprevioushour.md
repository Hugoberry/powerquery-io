---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Indica se questo valore datetime rientra nell'ora precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'ora corrente.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Indica se questo valore datetime specificato `dateTime` rientra nell'ora precedente, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'ora corrente.

-   `dateTime`: valore `datetime` o `datetimezone` da valutare.


## Examples

### Example #1
Determinare se l'ora prima dell'ora di sistema corrente rientra nell'ora precedente.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
