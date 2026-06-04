---
title: Duration.Days
---

# Duration.Days


Retorna la part de dies d'una duració.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Retorna la part de dies de `duration`.


## Examples

### Example #1
Extreu el nombre de dies entre dues dates.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
