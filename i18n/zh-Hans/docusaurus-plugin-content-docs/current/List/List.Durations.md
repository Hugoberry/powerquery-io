---
title: List.Durations
---

# List.Durations


## Description

给定初始值、计数和增量 duration 值来生成 duration 值的列表。


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

返回 <code>count</code> <code>duration</code> 值的列表，从 <code>start</code> 开始，以给定的 <code>duration</code> <code>step</code> 为增量。


## Examples

### Example #1 
创建 5 个值的列表，从 1 小时开始，以 1 小时为增量。
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
