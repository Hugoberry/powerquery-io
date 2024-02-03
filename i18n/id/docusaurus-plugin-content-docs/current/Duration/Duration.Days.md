---
title: Duration.Days
---

# Duration.Days


## Description

Menghasilkan bagian hari dari durasi.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Menghasilkan bagian hari dari <code>duration</code>.


## Examples

### Example #1 
Ekstrak jumlah hari di antara dua tanggal.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
