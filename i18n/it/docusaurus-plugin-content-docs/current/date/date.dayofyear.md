---
title: Date.DayOfYear
---

# Date.DayOfYear


Restituisce un numero compreso tra 1 e 366 che rappresenta il giorno dell&#39;anno.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Restituisce un numero che rappresenta il giorno dell'anno nel valore <code>date</code>, <code>datetime</code> o <code>datetimezone</code> <code>dateTime</code> fornito.


## Examples

### Example #1 
Giorno dell&#39;anno per il 1° marzo 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
