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

Verilen <code>time</code> Saat değerinin parçalarını içeren bir kayıt döndürür. <ul>        <li><code>time</code>: Parçalarının kaydının hesaplanacağı bir <code>time</code>değeri.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#time(11, 56, 2)&lt;/code&gt; değerini Saat değerlerini içeren bir kayda dönüştürür.
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
