---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


\{ old, new } の置換をそれぞれ適用します。


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

リスト <code>list</code> に対して指定された置換を実行します。置換操作 <code>replacements</code> は、古い値と新しい値という 2 つの値のリストで構成されます。これはリストで指定されます。    省略可能な数式条件値 <code>equationCriteria</code> を指定して、値が等しいかどうかのテストを制御できます。


## Examples

### Example #1 
\{1, 2, 3, 4, 5} の値 5 を -5 で置き換え、値 1 を -1 で置き換えた結果のリストを作成します。
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
