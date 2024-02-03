---
title: List.Union
---

# List.Union


## Description

入力内に見つかったリスト値の和集合を返します。


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

リスト <code>lists</code> のリストを受け取って個々のリスト内の項目の和集合を計算し、それを出力リストとして返します。その結果、返されるリストには、すべての入力リストのすべての項目が含まれます。    この操作は、従来のバッグ セマンティクスを維持するため、重複値が Union の一部として照合されます。    省略可能な数式条件値 <code>equationCriteria</code> を指定して、値が等しいかどうかのテストを制御できます。


## Examples

### Example #1 
リスト \{1..5}、\{2..6}、\{3..7} の和集合を作成します。
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
