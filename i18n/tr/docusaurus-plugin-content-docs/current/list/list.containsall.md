---
title: List.ContainsAll
---

# List.ContainsAll


Listenin başka bir listedeki tüm değerleri içerip içermediğini belirtir.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

<code>list</code> listesinin başka bir <code>values</code> listesindeki tüm değerleri nerede içerdiğini belirtir.    Değer listede bulunursa doğru, aksi takdirde yanlış değerini döndürür. Eşitlik sınamasını denetlemek için <code>equationCriteria</code> isteğe bağlı eşitlik ölçüt değeri belirtilebilir. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5} listesinin 3 ve 4&#39;ü içerip içermediğini bulur.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3, 4, 5} listesinin 5 ve 6&#39;ü içerip içermediğini bulur.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
