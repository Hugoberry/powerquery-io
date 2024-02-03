---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

给定初始值、计数和增量期间值来生成 datetimezone 值的列表。


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

返回大小为 <code>count</code> 的 <code>datetimezone</code> 值的列表，从 <code>start</code> 开始。给定的增量 <code>step</code> 是加到每个值的 <code>duration</code> 值。


## Examples

### Example #1 
从新年前 5 分钟(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0))开始创建 10 个值的列表，以 1 分钟为增量(#duration(0, 0, 1, 0))。
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
