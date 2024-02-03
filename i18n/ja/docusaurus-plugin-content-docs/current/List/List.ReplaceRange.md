---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

指定された開始位置から、指定された数の値を置換値に置き換えます。


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

<code>list</code> 内の指定された開始位置 <code>index</code> から、<code>count</code> 個の値をリスト <code>replaceWith</code> に置き換えます。


## Examples

### Example #1 
リスト \{1, 2, 7, 8, 9, 5} 内の \{7, 8, 9} を \{3, 4} に置き換えます。
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
