---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

入力値のすべての出現を削除します。


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

リスト <code>list1</code> から、<code>list2</code> に指定された値のすべての出現を削除します。<code>list2</code> の値が <code>list1</code> に存在しない場合、元のリストが返されます。    省略可能な数式条件値 <code>equationCriteria</code> を指定して、値が等しいかどうかのテストを制御できます。


## Examples

### Example #1 
\{1, 2, 3, 4, 5, 5} から \{1, 5} を削除したリストを作成します。
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
