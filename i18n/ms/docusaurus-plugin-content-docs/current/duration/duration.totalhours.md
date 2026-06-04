---
title: Duration.TotalHours
---

# Duration.TotalHours


Mengembalikan jumlah jam untuk jangkauan tempoh ini.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Mengembalikan jumlah jam yang dirangkumi oleh `duration`.


## Examples

### Example #1
Cari jumlah jam yang dirangkumi oleh nilai tempoh.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
