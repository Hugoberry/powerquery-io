---
title: Date.MonthName
---

# Date.MonthName


Mengembalikan komponen nama bulan.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Mengembalikan nama komponen bulan untuk `date` yang ditentukan. `culture` pilihan juga mungkin diberikan (contohnya, "en-US").


## Examples

### Example #1
Dapatkan nama bulan.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
