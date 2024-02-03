---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

指示此日期是否会在系统当前日期和时间确定的上一周数中出现。请注意，当传递一个在当前周内出现的值时，此函数将返回 false。


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

指示给定的日期时间值 <code>dateTime</code> 是否会在系统当前日期和时间确定的上一周数中出现。请注意，当传递一个在当前周内出现的值时，此函数将返回 false。      <ul>      <li><code>dateTime</code>: 要计算的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>weeks</code>: 周数。</li>      </ul>


## Examples

### Example #1 
确定当前系统时间之前的周是否在之前的两周中。
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
