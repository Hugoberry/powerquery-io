---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

datetimezone değerinin parçalarını içeren bir kayıt döndürür.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

Verilen <code>dateTimeZone</code> datetimezone değerinin parçalarını içeren bir kayıt döndürür. <ul>        <li><code>dateTimeZone</code>: Parçalarının kaydının hesaplanacağı bir <code>datetimezone</code>değeri.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; değerini Tarih, Saat ve Bölge değerlerini içeren bir kayda dönüştürür.
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
