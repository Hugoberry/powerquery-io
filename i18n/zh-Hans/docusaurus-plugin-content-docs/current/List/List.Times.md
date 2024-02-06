---
title: List.Times
---

# List.Times


给定初始值、计数和增量期间值来生成 time 值的列表。


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

返回大小为 <code>count</code> 的 <code>time</code> 值的列表，从 <code>start</code> 开始。给定的增量 <code>step</code> 是加到每个值的 <code>duration</code> 值。


## Examples

### Example #1 
从中午(#time(12, 0, 0))开始创建 4 个值的列表，以 1 小时为增量(#duration(0, 1, 0, 0))。
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
