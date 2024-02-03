---
title: List.Intersect
---

# List.Intersect


## Description

入力内に見つかったリスト値の積集合を返します。


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

入力リスト <code>lists</code> 内に見つかったリスト値の積集合を返します。省略可能なパラメーター <code>equationCriteria</code> を指定できます。


## Examples

### Example #1 
\{1..5}、\{2..6}、\{3..7} の各リストの積集合を求めます。
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
