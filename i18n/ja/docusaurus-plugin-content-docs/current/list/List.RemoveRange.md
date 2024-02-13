---
title: List.RemoveRange
---

# List.RemoveRange


指定された開始位置から、指定された数の値を削除します。


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

<code>list</code> 内の指定された開始位置 <code>index</code> から、<code>count</code> 個の値を削除します。


## Examples

### Example #1 
リスト \{1, 2, 3, 4, -6, -2, -1, 5} の開始インデックス 4 から、3 つの値を削除します。
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
