---
title: Date.Year
---

# Date.Year


## Description

Menghasilkan komponen tahun.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Menghasilkan komponen tahun dengan nilai <code>datetime</code> yang tersedia, <code>dateTime</code>.


## Examples

### Example #1 
Mencari tahun dalam #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
