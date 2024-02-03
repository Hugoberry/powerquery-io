---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Mengembalikan nama hari dalam minggu.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Mengembalikan nama hari dalam seminggu untuk <code>date</code> yang ditentukan. <code>culture</code> pilihan juga mungkin diberikan (contohnya, "en-US").


## Examples

### Example #1 
Dapatkan nama hari dalam minggu.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
