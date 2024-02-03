---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


## Description

指示此日期是否会在系统当前日期和时间确定的上一月中出现。请注意，当传递一个在当前月内出现的值时，此函数将返回 false。


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Details

指示给定的日期时间值 <code>dateTime</code> 是否会在系统当前日期和时间确定的上一月中出现。请注意，当传递一个在当前月内出现的值时，此函数将返回 false。      <ul>      <li><code>dateTime</code>: 要计算的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
确定当前系统时间之前的那个月是否处于上个月。
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
