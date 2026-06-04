---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Mengembalikan jumlah minit untuk jangkauan tempoh ini.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Mengembalikan jumlah minit yang dirangkumi oleh `duration`.


## Examples

### Example #1
Cari jumlah minit yang dirangkumi oleh nilai tempoh.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
