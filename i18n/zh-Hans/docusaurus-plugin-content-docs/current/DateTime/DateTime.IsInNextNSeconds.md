---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


指示此日期时间是否会在系统当前日期和时间确定的下一秒数中出现。请注意，当传递一个在当前秒内出现的值时，此函数将返回 false。


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

指示给定的日期时间值 <code>dateTime</code> 是否会在系统当前日期和时间确定的下一秒数中出现。请注意，当传递一个在当前秒内出现的值时，此函数将返回 false。      <ul>      <li><code>dateTime</code>: 要计算的 <code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>seconds</code>: 秒数。</li>      </ul>


## Examples

### Example #1 
确定当前系统时间后的秒是否处于接下来的两秒内。
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
