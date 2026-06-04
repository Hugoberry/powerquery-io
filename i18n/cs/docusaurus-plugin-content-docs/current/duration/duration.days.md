---
title: Duration.Days
---

# Duration.Days


Vrátí denní část doby trvání.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Vrátí denní část z `duration`.


## Examples

### Example #1
Extrahuje počet dní mezi dvěma daty.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
