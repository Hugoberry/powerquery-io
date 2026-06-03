---
title: DateTime.IsInNextMinute
---

# DateTime.IsInNextMinute


Indica se questo valore datetime rientra nel minuto successivo, come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel minuto corrente.


## Syntax

```powerquery
DateTime.IsInNextMinute(
    dateTime as any
) as logical
```


## Remarks

Indica se il valore datetime specificato `dateTime` rientra nel minuto successivo come determinato dalla data e dall'ora correnti del sistema. Questa funzione restituirà false se viene passato un valore che rientra nel minuto corrente.

-   `dateTime`: valore `datetime` o `datetimezone` da valutare.


## Examples

### Example #1
Determinare se il minuto dopo l'ora di sistema corrente rientra nel minuto successivo.
```powerquery
DateTime.IsInNextMinute(DateTime.FixedLocalNow() + #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
