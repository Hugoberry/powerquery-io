---
title: List.Reverse
---

# List.Reverse


## Description

リスト内の値の順序を反転します。


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

リスト <code>list</code> 内の値の順序が反転されたリストを返します。


## Examples

### Example #1 
\{1..10} の順序が反転されたリストを作成します。
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
