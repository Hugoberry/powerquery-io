---
title: List.RemoveItems
---

# List.RemoveItems


list1 から、リストに存在する項目を削除します。


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

<code>list1</code> から、<code>list2</code> に指定された値のすべての出現を削除します。<code>list2</code> の値が <code>list1</code> に存在しない場合、元のリストが返されます。


## Examples

### Example #1 
リスト \{1, 2, 3, 4, 2, 5, 5} から、リスト \{2, 4, 6} 内の項目を削除します。
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
