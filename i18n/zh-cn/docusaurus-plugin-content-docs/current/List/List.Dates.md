---
title: List.Dates
---

# List.Dates


## Description

给定初始值、计数和增量期间值来生成 date 值的列表。


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

返回大小为 <code>count</code> 的 <code>date</code> 值的列表，从 <code>start</code> 开始。给定的增量 <code>step</code> 是加到每个值的 <code>duration</code> 值。


## Examples

### Example #1 
创建 5 个值的列表，从新年除夕(#date(2011, 12, 31))开始，以 1 天为增量(#duration(1, 0, 0, 0))。
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
