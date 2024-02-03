---
title: List.First
---

# List.First


## Description

Listenin ilk değerini veya boşsa belirtilen varsayılanı döndürür.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

<code>list</code> listesindeki ilk öğeyi veya liste boşsa <code>defaultValue</code> isteğe bağlı varsayılan değerini döndürür.    Liste boşsa ve varsayılan değer belirtilmemişse, bu işlev <code>null</code> döndürür.


## Examples

### Example #1 
\{1, 2, 3} listesinin ilk değerini bulur.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
\{} listesinin ilk değerini bulur. Liste boşsa, -1 döndürür.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
