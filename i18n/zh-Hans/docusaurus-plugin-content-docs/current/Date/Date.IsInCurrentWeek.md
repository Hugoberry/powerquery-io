---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


指示在当前星期中此日期是否出现，它由系统上的当前日期和时间确定。


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

指示在当前星期中给定的日期时间值 <code>dateTime</code> 是否出现，它由系统上的当前日期和时间确定。      <ul>      <li><code>dateTime</code>: 要进行求值的 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。</li>      </ul>


## Examples

### Example #1 
确定当前系统时间是否处于当前星期。
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
