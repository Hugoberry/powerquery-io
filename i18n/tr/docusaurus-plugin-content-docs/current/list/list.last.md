---
title: List.Last
---

# List.Last


Listenin son değerini veya boşsa belirtilen varsayılanı döndürür.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

<code>list</code> listesindeki son öğeyi veya liste boşsa <code>defaultValue</code> isteğe bağlı varsayılan değerini döndürür.    Liste boşsa ve varsayılan değer belirtilmemişse, bu işlev <code>null</code> döndürür.


## Examples

### Example #1 
\{1, 2, 3} listesinin son değerini bulur.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
\{} listesindeki son değeri bulur veya boşsa -1 döndürür.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
