---
title: List.Median
---

# List.Median


Listedeki medyan değerini döndürür.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

`list` listesinin ortanca öğesini döndürür. Liste `null` olmayan bir değer içermiyorsa bu işlev `null` döndürür. Çift sayıda öğe varsa liste yalnızca tarih ve saat, süre, sayı veya saatlerden oluşmadığı sürece işlev iki ortanca öğeden daha küçük olanı seçer, aksi takdirde iki öğenin ortalamasını döndürür.


## Examples

### Example #1
`{5, 3, 1, 7, 9}` listesindeki medyan öğeyi bulur.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
