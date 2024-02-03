---
title: Date.Year
---

# Date.Year


## Description

Mengembalikan komponen tahun.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Mengembalikan komponen tahun bagi nilai <code>datetime</code> yang ditentukan, <code>dateTime</code>.


## Examples

### Example #1 
Cari tahun dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
