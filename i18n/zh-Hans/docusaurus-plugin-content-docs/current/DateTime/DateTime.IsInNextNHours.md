---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


指示此日期时间是否会在系统当前日期和时间确定的下一小时数中出现。请注意，当传递一个在当前小时内出现的值时，此函数将返回 false。


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

指示给定的日期时间值 <code>dateTime</code> 是否会在系统当前日期和时间确定的下一小时数中出现。请注意，当传递一个在当前小时内出现的值时，此函数将返回 false。      <ul>      <li><code>dateTime</code>: 要计算的 <code>datetime</code> 或 <code>datetimezone</code> 值。</li>      <li><code>hours</code>: 小时数。</li>      </ul>


## Examples

### Example #1 
确定当前系统时间后的小时是否处于接下来的两个小时内。
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
