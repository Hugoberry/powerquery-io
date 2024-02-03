---
title: Date.MonthName
---

# Date.MonthName


## Description

Ay bileşeninin adını döndürür.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Sağlanan <code>date</code> için ay bileşeninin adını döndürür. Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör. "tr-TR").


## Examples

### Example #1 
Ayın adını alır.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
