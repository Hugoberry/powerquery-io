---
title: DateTime.ToRecord
---

# DateTime.ToRecord


datetime değerinin parçalarını içeren bir kayıt döndürür.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Verilen `dateTime` datetime değerinin parçalarını içeren bir kayıt döndürür.

-   `dateTime`: Parçalarının kaydının hesaplanacağı bir `datetime`değeri.


## Examples

### Example #1
`#datetime(2011, 12, 31, 11, 56, 2)` değerini Tarih ve Saat değerlerini içeren bir kayda dönüştürür.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
