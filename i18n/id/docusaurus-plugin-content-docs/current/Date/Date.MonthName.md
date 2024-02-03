---
title: Date.MonthName
---

# Date.MonthName


## Description

Menghasilkan nama dari komponen bulan.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Mengembalikan nama komponen bulan untuk <code>date</code> yang diberikan. <code>culture</code> opsional juga dapat diberikan (misalnya, "en-US").


## Examples

### Example #1 
Mendapatkan nama bulan.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
