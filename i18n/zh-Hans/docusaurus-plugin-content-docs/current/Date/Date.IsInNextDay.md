---
title: Date.IsInNextDay
---

# Date.IsInNextDay


指示此日期是否会在系统当前日期和时间确定的下一天中出现。请注意，当传递一个在当前天内出现的值时，此函数将返回 false。


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

指示给定的日期时间值 <code>dateTime</code> 是否会在系统当前日期和时间确定的下一天中出现。请注意，当传递一个在当前天内出现的值时，此函数将返回 false。      <ul>      <li><code>dateTime</code>: 要计算的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
确定当前系统时间之后的那一天是否处于下一天。
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
