---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Mengembalikan jumlah hari untuk jangkauan tempoh ini.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Mengembalikan jumlah hari yang dirangkumi oleh <code>duration</code>.


## Examples

### Example #1 
Cari jumlah hari yang dirangkumi oleh nilai tempoh.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
