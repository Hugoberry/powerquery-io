---
title: Date.ToRecord
---

# Date.ToRecord


Tarih değerinin parçalarını içeren bir kayıt döndürür.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Verilen `date` tarih değerinin parçalarını içeren bir kayıt döndürür.

-   `date`: Parçalarının kaydının hesaplanacağı bir `date`değeri.


## Examples

### Example #1
`#date(2011, 12, 31)` değerini tarih değerinin parçalarını içeren bir kayda dönüştürür.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
