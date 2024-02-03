---
title: List.Min
---

# List.Min


## Description

Bir boş listenin en küçük veya varsayılan değerini döndürür.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

<code>list</code> listesindeki en küçük öğeyi veya liste boşsa <code>default</code> isteğe bağlı varsayılan değerini döndürür.    <code>comparisonCriteria</code> isteğe bağlı comparisonCriteria değeri, listedeki öğelerin nasıl karşılaştırılacağını belirlemek için belirtilebilir. Bu parametre null ise varsayılan karşılaştırıcı kullanılır.


## Examples

### Example #1 
\{1, 4, 7, 3, -2, 5} listesinin en küçük değerini bulur.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
\{} listesindeki en küçük değeri bul veya boşsa -1 döndür. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
