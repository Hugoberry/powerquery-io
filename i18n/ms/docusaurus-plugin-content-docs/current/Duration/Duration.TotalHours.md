---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Mengembalikan jumlah jam untuk jangkauan tempoh ini.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Mengembalikan jumlah jam yang dirangkumi oleh <code>duration</code>.


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
