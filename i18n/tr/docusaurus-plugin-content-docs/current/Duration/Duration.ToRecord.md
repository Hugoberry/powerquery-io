---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

Sürenin parçalarını içeren bir kayıt döndürür.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

<code>duration</code> süre değerinin parçalarını içeren bir kayıt döndürür.  <ul>        <li><code>duration</code>: Kaydın oluşturulduğu <code>duration</code>.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; değerini mümkünse gün, saat, dakika ve saniyeleri içeren parçalarından oluşan bir kayda dönüştürür.
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
