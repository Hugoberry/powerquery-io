---
title: Date.Month
---

# Date.Month


## Description

Menghasilkan komponen bulan.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Details

Menghasilkan komponen bulan dengan nilai <code>datetime</code> yang tersedia, <code>dateTime</code>.


## Examples

### Example #1 
Mencari bulan dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
