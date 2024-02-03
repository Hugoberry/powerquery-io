---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

Mengembalikan jumlah minit untuk jangkauan tempoh ini.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

Mengembalikan jumlah minit yang dirangkumi oleh <code>duration</code>.


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
