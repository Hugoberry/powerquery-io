---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Indica se questo valore datetime rientra nell'ora successiva, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'ora corrente.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nell'ora successiva, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'ora corrente.

-   `dateTime`: valore `datetime` o `datetimezone` da valutare.


## Examples

### Example #1
Determinare se l'ora dopo l'ora di sistema corrente rientra nell'ora successiva.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
