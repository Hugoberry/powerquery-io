---
title: List.MinN
---

# List.MinN


Listedeki en küçük değerleri döndürür. Döndürülecek değer sayısı veya filtre koşulu belirtilebilir.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

`list` listesindeki en küçük değerleri döndürür. `countOrCondition` parametresi döndürülecek değer sayısını veya bir filtre koşulunu belirtir. `comparisonCriteria` isteğe bağlı parametresi, listedeki değerlerin nasıl karşılaştırılacağını belirtir.

-   `list`: Değerlerin listesi.
-   `countOrCondition`: Bir sayı belirtilirse en fazla `countOrCondition` öğeye sahip, artan sırada bir liste döndürülür. Bir koşul belirtilirse bu koşulu sağlayan öğelerin listesi döndürülür. Bir öğe bu koşulu sağlamadığında, diğer öğeler değerlendirilmez. Parametre null ise listedeki tek en küçük öğe döndürülür. Bu parametre boş bırakılırsa, listedeki en küçük değer döndürülür.
-   `comparisonCriteria`: *(İsteğe bağlı)* Listedeki öğelerin nasıl karşılaştırılacağını belirlemek için isteğe bağlı bir `comparisonCriteria` değer belirtilebilir. Bu parametre boş bırakılırsa, varsayılan karşılaştırıcı kullanılır.


## Examples

### Example #1
`{3, 4, 5, -1, 7, 8, 2}` listesinin en küçük 5 değerini bulur.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
