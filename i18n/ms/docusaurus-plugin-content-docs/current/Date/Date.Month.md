---
title: Date.Month
---

# Date.Month


## Description

Mengembalikan komponen bulan.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Mengembalikan komponen bulan bagi nilai <code>datetime</code> yang ditentukan, <code>dateTime</code>.


## Examples

### Example #1 
Cari bulan dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
