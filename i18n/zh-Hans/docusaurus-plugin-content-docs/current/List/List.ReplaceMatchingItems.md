---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


应用 \{ old, new } 的每个替换。


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

执行对列表 <code>list</code> 的指定的替换。一个替换操作 <code>replacements</code> 由两个值的列表、列表中提供的旧值和新值组成。    可以指定一个可选相等条件值 <code>equationCriteria</code> 来控制相等测试。


## Examples

### Example #1 
从 \{1, 2, 3, 4, 5} 创建一个列表，它将值 5 替换为 -5，将值 1 替换为 -1。
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
