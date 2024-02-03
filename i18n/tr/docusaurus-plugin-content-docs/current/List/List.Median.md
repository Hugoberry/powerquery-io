---
title: List.Median
---

# List.Median


## Description

Listedeki medyan değerini döndürür.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

<code>list</code> listesinin ortanca öğesini döndürür. Liste <code>null</code> olmayan bir değer içermiyorsa bu işlev <code>null</code> döndürür.    Çift sayıda öğe varsa liste yalnızca tarih ve saat, süre, sayı veya saatlerden oluşmadığı sürece işlev iki ortanca öğeden daha küçük olanı seçer,    aksi takdirde iki öğenin ortalamasını döndürür.


## Examples

### Example #1 
&lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; listesindeki medyan öğeyi bulur.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
