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

Verilen <code>dateTime</code> datetime değerinin parçalarını içeren bir kayıt döndürür. <ul>        <li><code>dateTime</code>: Parçalarının kaydının hesaplanacağı bir <code>datetime</code>değeri.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; değerini Tarih ve Saat değerlerini içeren bir kayda dönüştürür.
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
