---
title: List.Contains
---

# List.Contains


## Description

Listenin değeri içerip içermediğini belirtir.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

<code>list</code> listesinin <code>value</code> değerini içerip içermediğini belirtir.    Değer listede bulunursa true, aksi takdirde false değerini döndürür. Eşitlik sınamasını denetlemek için <code>equationCriteria</code> isteğe bağlı denklem ölçüt değeri belirtilebilir. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5} listesinin 3&#39;ü içerip içermediğini bulur.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
\{1, 2, 3, 4, 5} listesinin 6&#39;ü içerip içermediğini bulur.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
