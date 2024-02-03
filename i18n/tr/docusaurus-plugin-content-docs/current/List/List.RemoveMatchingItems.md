---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Girdi değerlerinin tüm oluşumlarını kaldırır.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

<code>list2</code> içindeki verilen değerleri <code>list1</code> listesinden kaldırır. <code>list2</code> içindeki değerler <code>list1</code> içinde yoksa, asıl liste döndürülür.    Eşitlik sınamasını denetlemek için <code>equationCriteria</code> isteğe bağlı eşitlik ölçüt değeri belirtilebilir. 


## Examples

### Example #1 
\{1, 2, 3, 4, 5, 5} listesinden \{1, 5} değerlerini içermeyen bir liste oluşturur.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
