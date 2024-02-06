---
title: List.Combine
---

# List.Combine


通过合并多个列表来返回一个列表。


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Remarks

提取列表的列表 <code>lists</code> 并将它们合并为一个新列表。


## Examples

### Example #1 
合并两个简单的列表 \{1, 2} 和 \{3, 4}。
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
合并两个列表 \{1, 2} 和 \{3, \{4, 5}}，其中一个包含嵌套的列表。
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
