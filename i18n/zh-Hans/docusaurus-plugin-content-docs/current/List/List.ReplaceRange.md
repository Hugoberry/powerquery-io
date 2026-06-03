---
title: List.ReplaceRange
---

# List.ReplaceRange


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


## Remarks

从指定的位置 `index` 开始使用列表 `replaceWith` 替换 `list` 中的 `count` 个值。


## Examples

### Example #1
使用 \{3, 4\} 替换列表 \{1, 2, 7, 8, 9, 5\} 中的 \{7, 8, 9\}。
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
