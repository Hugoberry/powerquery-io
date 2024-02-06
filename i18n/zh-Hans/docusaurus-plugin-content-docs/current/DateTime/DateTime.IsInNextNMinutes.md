---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


指示此日期时间是否会在系统当前日期和时间确定的下一分钟数中出现。请注意，当传递一个在当前分钟内出现的值时，此函数将返回 false。


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

指示给定的日期时间值 <code>dateTime</code> 是否会在系统当前日期和时间确定的下一分钟数中出现。请注意，当传递一个在当前分钟内出现的值时，此函数将返回 false。      <ul>      <li><code>dateTime</code>: 要计算的 <code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>minutes</code>: 分钟数。</li>      </ul>


## Examples

### Example #1 
确定当前系统时间后的分钟是否处于接下来的两分钟内。
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
