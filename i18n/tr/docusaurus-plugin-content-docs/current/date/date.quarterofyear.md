---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Tarihin yılın hangi çeyreği içinde olduğunu gösteren bir sayı döndürür.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

`dateTime` tarihinin yılın hangi çeyreği içinde olduğunu gösteren, 1 ile 4 arasındaki bir sayıyı döndürür. `dateTime` bir `date`, `datetime` veya `datetimezone` değeri olabilir.


## Examples

### Example #1
#date(2011, 12, 31) tarihinin yılın hangi çeyreği içinde olduğunu bulur.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
