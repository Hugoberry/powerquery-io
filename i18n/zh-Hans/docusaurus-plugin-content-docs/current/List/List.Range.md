---
title: List.Range
---

# List.Range


返回从偏移量开始的列表的子集。


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

返回从偏移量 <code>list</code> 开始的列表的子集。可选参数 <code>offset</code> 用于设置子集中的最大项数。


## Examples

### Example #1 
查找包含数字 1-10 的列表中从偏移量 6 开始的子集。
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
查找包含数字 1-10 的列表中从偏移量 6 开始、长度为 2 的子集。
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
