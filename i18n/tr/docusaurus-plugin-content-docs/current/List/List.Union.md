---
title: List.Union
---

# List.Union


Girdide bulunan liste değerlerinin birleşimini döndürür.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

<code>lists</code> liste listesini alır, her listedeki öğeleri birleştirir ve çıktı listesinde döndürür. Sonuç olarak, döndürülen liste tüm girdi listelerindeki bütün öğeleri içerir.    Bu işlem geleneksel torba semantiğini korur, böylece yinelenen değerler Birleşimin parçası olarak eşleştirilir.    Eşitlik sınamasını denetlemek için <code>equationCriteria</code> isteğe bağlı denklem ölçüt değeri belirtilebilir. 


## Examples

### Example #1 
\{1..5}, \{2..6}, \{3..7} listelerinin birleşimini oluşturur.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
