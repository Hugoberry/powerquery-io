---
title: List.Average
---

# List.Average


## Description

Değerlerin ortalamasını döndürür. number, date, datetime, datetimezone ve duration değerleri ile çalışır.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

<code>list</code> listesindeki öğelerin ortalama değerini döndürür. Sonuç, listedeki değerler ile aynı veri türünde sağlanır. Yalnızca number, date, time, datetime, datetimezone ve duration değerleri ile çalışır.    Liste boş ise null döndürülür.


## Examples

### Example #1 
&lt;code&gt;\{3, 4, 6}&lt;/code&gt; sayı listesinin ortalamasını bulur.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
1 Ocak 2011, 2 Ocak 2011 ve 3 Ocak 2011 tarih değerlerinin ortalamasını bulur.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
