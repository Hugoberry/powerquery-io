---
title: List.Transform
---

# List.Transform


## Description

このリストから計算された値の新しいリストを返します。


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

変換関数 <code>transform</code> をリスト <code>list</code> に適用して値の新しいリストを返します。


## Examples

### Example #1 
1 をリスト \{1, 2} 内のそれぞれの値に加算します。
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
