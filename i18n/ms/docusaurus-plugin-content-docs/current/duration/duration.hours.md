---
title: Duration.Hours
---

# Duration.Hours


Mengembalikan bahagian jam bagi tempoh.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Mengembalikan bahagian jam bagi `duration`.


## Examples

### Example #1
Mengekstrak jam daripada nilai tempoh.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
