---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

从特定位置开始使用替换值替换指定数目的值。


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

从指定的位置 <code>index</code> 开始使用列表 <code>replaceWith</code> 替换 <code>list</code> 中的 <code>count</code> 个值。


## Examples

### Example #1 
使用 \{3, 4} 替换列表 \{1, 2, 7, 8, 9, 5} 中的 \{7, 8, 9}。
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
