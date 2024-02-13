---
title: List.Max
---

# List.Max


Bir boş listenin en büyük veya varsayılan değerini döndürür.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

<code>list</code> listesindeki en büyük öğeyi veya liste boşsa <code>default</code> isteğe bağlı varsayılan değerini döndürür.    <code>comparisonCriteria</code> isteğe bağlı comparisonCriteria değeri, listedeki öğelerin nasıl karşılaştırılacağını belirlemek için belirtilebilir. Bu parametre null ise varsayılan karşılaştırıcı kullanılır.


## Examples

### Example #1 
\{1, 4, 7, 3, -2, 5} listesinin en büyük değerini bulur.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
\{} listesindeki en büyük değeri bul veya boşsa -1 döndür. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
