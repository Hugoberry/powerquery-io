---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


## Description

指示此日期是否会在系统当前日期和时间确定的下一天数中出现。请注意，当传递一个在当前天内出现的值时，此函数将返回 false。


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

指示给定的日期时间值 <code>dateTime</code> 是否会在系统当前日期和时间确定的下一天数中出现。请注意，当传递一个在当前天内出现的值时，此函数将返回 false。      <ul>      <li><code>dateTime</code>: 要计算的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>days</code>: 天数。</li>      </ul>


## Examples

### Example #1 
确定当前系统时间之后的日期是否在接下来的两天中。
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
