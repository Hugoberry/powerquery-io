---
title: Date.DaysInMonth
---

# Date.DaysInMonth


Restituisce un numero compreso tra 28 e 31 che indica il numero dei giorni del mese.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Remarks

Restituisce il numero di giorni del mese nel valore `dateTime` di `date`, `datetime` o `datetimezone`.

-   `dateTime`: valore `date`, `datetime` o `datetimezone` per cui viene restituito il numero di giorni del mese.


## Examples

### Example #1
Numero di giorni del mese di dicembre come rappresentato da `#date(2011, 12, 01)`.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
