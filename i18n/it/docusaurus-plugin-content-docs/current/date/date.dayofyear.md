---
title: Date.DayOfYear
---

# Date.DayOfYear


Restituisce un numero compreso tra 1 e 366 che rappresenta il giorno dell'anno.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Restituisce un numero che rappresenta il giorno dell'anno nel valore `date`, `datetime` o `datetimezone` `dateTime` fornito.


## Examples

### Example #1
Giorno dell'anno per il 1° marzo 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
