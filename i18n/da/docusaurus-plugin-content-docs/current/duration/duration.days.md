---
title: Duration.Days
---

# Duration.Days


Returnerer dagsdelen af en varighed.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Returnerer dagsdelen af <code>duration</code>.


## Examples

### Example #1 
Udtræk antallet af dage mellem to datoer.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
