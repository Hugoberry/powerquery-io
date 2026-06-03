---
title: List.RemoveNulls
---

# List.RemoveNulls


Belirtilen listeden tüm "null" değerleri kaldırır.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

`list` içindeki "null" değerlerin tüm oluşumlarını kaldırır. Listede "null" değer yoksa, asıl liste döndürülür.


## Examples

### Example #1
\{1, 2, 3, null, 4, 5, null, 6\} listesinden "null" değerleri kaldırır.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
