---
title: Duration.Days
---

# Duration.Days


Restituisce la parte dei giorni di una durata.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Restituisce la parte dei giorni di <code>duration</code>.


## Examples

### Example #1 
Estrarre il numero di giorni tra due date.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
