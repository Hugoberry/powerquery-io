---
title: Duration.Seconds
---

# Duration.Seconds


Mengembalikan bahagian saat bagi tempoh.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Mengembalikan bahagian saat bagi `duration`.


## Examples

### Example #1
Mengekstrak saat daripada nilai tempoh.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
