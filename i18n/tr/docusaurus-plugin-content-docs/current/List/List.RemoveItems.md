---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Listede mevcut olan öğeleri list1&#39;den kaldırır.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

<code>list2</code> içindeki verilen değerleri <code>list1</code> öğesinden kaldırır. <code>list2</code> içindeki değerler <code>list1</code> içinde yoksa, asıl liste döndürülür.


## Examples

### Example #1 
\{2, 4, 6} listesindeki öğeleri \{1, 2, 3, 4, 2, 5, 5} listesinden kaldırır.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
