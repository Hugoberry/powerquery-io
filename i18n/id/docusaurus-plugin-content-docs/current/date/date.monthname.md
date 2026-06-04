---
title: Date.MonthName
---

# Date.MonthName


Menghasilkan nama dari komponen bulan.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Mengembalikan nama komponen bulan untuk `date` yang diberikan. `culture` opsional juga dapat diberikan (misalnya, "en-US").


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
