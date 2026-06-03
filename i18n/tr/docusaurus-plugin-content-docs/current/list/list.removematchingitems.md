---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Girdi değerlerinin tüm oluşumlarını kaldırır.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

`list2` içindeki verilen değerleri `list1` listesinden kaldırır. `list2` içindeki değerler `list1` içinde yoksa, asıl liste döndürülür. Eşitlik sınamasını denetlemek için `equationCriteria` isteğe bağlı eşitlik ölçüt değeri belirtilebilir.


## Examples

### Example #1
\{1, 2, 3, 4, 5, 5\} listesinden \{1, 5\} değerlerini içermeyen bir liste oluşturur.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
