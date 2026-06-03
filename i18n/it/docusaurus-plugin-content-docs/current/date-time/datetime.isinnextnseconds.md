---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Indica se questo valore datetime rientra nel numero di secondi successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel secondo corrente.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel numero di secondi successivi, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel secondo corrente.

-   `dateTime`: valore `datetime` o `datetimezone` da valutare.
-   `seconds`: numero di secondi.


## Examples

### Example #1
Determinare se il secondo dopo l'ora di sistema corrente rientra nei due secondi successivi.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
