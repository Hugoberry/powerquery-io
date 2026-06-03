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

Belirtilen listedeki son öğeyi veya liste boşsa isteğe bağlı varsayılan değeri döndürür.

-   `list`: İncelenecek liste.
-   `defaultValue`: (İsteğe bağlı) Liste boşsa döndürülecek varsayılan değer. Liste boşsa ve varsayılan bir değer belirtilmemişse, işlev `null` döndürür.


## Examples

### Example #1
\{1, 2, 3\} listesinin son değerini bulur.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
\{\} listesindeki son değeri bulur veya boşsa -1 döndürür.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
