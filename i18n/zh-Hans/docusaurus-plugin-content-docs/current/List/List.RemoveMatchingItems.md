---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


删除所有出现的输入值。


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

从列表 `list1` 中删除 `list2` 中所有出现的给定值。如果 `list2` 中的值在 `list1` 中不存在，则返回原始列表。 可以指定一个可选相等条件值 `equationCriteria` 来控制相等测试。


## Examples

### Example #1
从 \{1, 2, 3, 4, 5, 5\} 创建一个不包含 \{1, 5\} 的列表。
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
