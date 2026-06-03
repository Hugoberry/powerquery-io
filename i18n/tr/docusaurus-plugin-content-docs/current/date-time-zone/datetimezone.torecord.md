---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


datetimezone değerinin parçalarını içeren bir kayıt döndürür.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Verilen `dateTimeZone` datetimezone değerinin parçalarını içeren bir kayıt döndürür.

-   `dateTimeZone`: Parçalarının kaydının hesaplanacağı bir `datetimezone`değeri.


## Examples

### Example #1
`#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` değerini Tarih, Saat ve Bölge değerlerini içeren bir kayda dönüştürür.
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
