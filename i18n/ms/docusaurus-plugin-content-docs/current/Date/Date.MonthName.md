---
title: Date.MonthName
---

# Date.MonthName


## Description

Mengembalikan komponen nama bulan.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Mengembalikan nama komponen bulan untuk <code>date</code> yang ditentukan. <code>culture</code> pilihan juga mungkin diberikan (contohnya, "en-US").


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
