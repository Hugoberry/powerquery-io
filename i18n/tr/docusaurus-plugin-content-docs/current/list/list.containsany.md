---
title: List.ContainsAny
---

# List.ContainsAny


Listenin başka bir listedeki herhangi bir değeri içerip içermediğini belirtir.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

<code>list</code> listesinin başka bir <code>values</code> listesindeki herhangi bir değeri içerip içermediğini belirtir.        Değer listede bulunursa doğru, aksi takdirde yanlış değerini döndürür. Eşitlik sınamasını denetlemek için <code>equationCriteria</code> isteğe bağlı eşitlik ölçüt değeri belirtilebilir. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5} listesinin 3 veya 9&#39;u içerip içermediğini bulur.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3, 4, 5} listesinin 6 veya 7&#39;yi içerip içermediğini bulur.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
