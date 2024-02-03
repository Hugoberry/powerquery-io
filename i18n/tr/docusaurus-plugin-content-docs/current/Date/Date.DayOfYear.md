---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Yılın gününü temsil eden 1 ile 366 arasında bir sayı döndürür.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Sağlanan <code>date</code>, <code>datetime</code> veya <code>datetimezone</code> değeri olan <code>dateTime</code> değerindeki yılın gününü temsil eden bir sayıyı döndürür.


## Examples

### Example #1 
1 Mart 2011 için yılın günü.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
