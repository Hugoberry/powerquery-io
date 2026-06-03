---
title: Time.ToRecord
---

# Time.ToRecord


Saat değerinin parçalarını içeren bir kayıt döndürür.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Verilen `time` Saat değerinin parçalarını içeren bir kayıt döndürür.

-   `time`: Parçalarının kaydının hesaplanacağı bir `time`değeri.


## Examples

### Example #1
`#time(11, 56, 2)` değerini Saat değerlerini içeren bir kayda dönüştürür.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
