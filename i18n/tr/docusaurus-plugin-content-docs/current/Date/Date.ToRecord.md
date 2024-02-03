---
title: Date.ToRecord
---

# Date.ToRecord


## Description

Tarih değerinin parçalarını içeren bir kayıt döndürür.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

Verilen <code>date</code> tarih değerinin parçalarını içeren bir kayıt döndürür. <ul>        <li><code>date</code>: Parçalarının kaydının hesaplanacağı bir <code>date</code>değeri.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; değerini tarih değerinin parçalarını içeren bir kayda dönüştürür.
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
