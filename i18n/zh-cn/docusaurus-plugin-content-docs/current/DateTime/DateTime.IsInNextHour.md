---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


## Description

指示此日期时间是否会在系统当前日期和时间确定的下一小时中出现。请注意，当传递一个在当前小时内出现的值时，此函数将返回 false。


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Details

指示给定的日期时间值 <code>dateTime</code> 是否会在系统当前日期和时间确定的下一小时中出现。请注意，当传递一个在当前小时内出现的值时，此函数将返回 false。      <ul>      <li><code>dateTime</code>: 要计算的 <code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
确定当前系统时间后的小时是否处于接下来的一小时内。
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
