---
title: Duration.Days
---

# Duration.Days


Menghasilkan bagian hari dari durasi.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Menghasilkan bagian hari dari `duration`.


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
