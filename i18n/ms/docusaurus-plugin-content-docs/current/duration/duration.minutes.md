---
title: Duration.Minutes
---

# Duration.Minutes


Mengembalikan bahagian minit bagi tempoh.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Mengembalikan bahagian minit bagi `duration`.


## Examples

### Example #1
Mengekstrak minit daripada nilai tempoh.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
