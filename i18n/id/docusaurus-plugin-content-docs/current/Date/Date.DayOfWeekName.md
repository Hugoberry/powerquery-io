---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Menghasilkan hari dari nama minggu.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Mengembalikan hari dari nama minggu untuk <code>date</code> yang diberikan. <code>culture</code> opsional juga dapat diberikan (misalnya, "en-US").


## Examples

### Example #1 
Mendapatkan hari dari nama minggu.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
