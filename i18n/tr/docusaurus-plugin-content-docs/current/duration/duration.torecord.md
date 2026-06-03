---
title: Duration.ToRecord
---

# Duration.ToRecord


Sürenin parçalarını içeren bir kayıt döndürür.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

`duration` süre değerinin parçalarını içeren bir kayıt döndürür.

-   `duration`: Kaydın oluşturulduğu `duration`.


## Examples

### Example #1
`#duration(2, 5, 55, 20)` değerini mümkünse gün, saat, dakika ve saniyeleri içeren parçalarından oluşan bir kayda dönüştürür.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
