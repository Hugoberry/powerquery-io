---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Indica se questo valore datetime rientra nel numero di ore successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'ora corrente.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel numero di ore successive, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'ora corrente.

-   `dateTime`: valore `datetime` o `datetimezone` da valutare.
-   `hours`: numero di ore.


## Examples

### Example #1
Determinare se l'ora dopo l'ora di sistema corrente rientra nelle due ore successive.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
