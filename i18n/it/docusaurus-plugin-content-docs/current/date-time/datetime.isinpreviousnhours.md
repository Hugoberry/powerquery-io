---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Indica se questo valore datetime rientra nel numero di ore precedenti, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'ora corrente.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel numero di ore precedenti, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nell'ora corrente.

-   `dateTime`: valore `datetime` o `datetimezone` da valutare.
-   `hours`: numero di ore.


## Examples

### Example #1
Determinare se l'ora prima dell'ora di sistema corrente rientra nelle due ore precedenti.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
