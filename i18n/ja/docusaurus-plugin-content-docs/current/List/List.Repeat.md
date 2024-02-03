---
title: List.Repeat
---

# List.Repeat


## Description

元のリストを指定された回数繰り返した結果のリストを返します。


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

元のリスト <code>list</code> を <code>count</code> 回繰り返した結果のリストを返します。


## Examples

### Example #1 
\{1, 2} を 3 回繰り返した結果のリストを作成します。
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
