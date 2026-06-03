---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Indica se questo valore datetime rientra nel numero di minuti successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel minuto corrente.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel numero di minuti successivi, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel minuto corrente.

-   `dateTime`: valore `datetime` o `datetimezone` da valutare.
-   `minutes`: numero di minuti.


## Examples

### Example #1
Determinare se il minuto dopo l'ora di sistema corrente rientra nei due minuti successivi.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
