---
title: Date.Year
---

# Date.Year


## Description

Yıl bileşenini döndürür.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Sağlanan <code>datetime</code> değeri olan <code>dateTime</code> değerinin yıl bileşenini döndürür.


## Examples

### Example #1 
#datetime(2011, 12, 31, 9, 15, 36) içindeki yılı bulur.
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
