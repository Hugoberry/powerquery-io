---
title: Date.EndOfWeek
---

# Date.EndOfWeek


返回周结束值。


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

返回包含 <code>dateTime</code> 的周结束值。此函数取可选的 <code>Day</code> <code>firstDayOfWeek</code>，从而设置为此相对计算的一周的第一天。默认值为<code>Day.Sunday</code>。      <ul>        <li><code>dateTime</code>: 从中计算一周最后一天的<code>date</code>、<code>datetime</code>或<code>datetimezone</code>值</li>        <li><code>firstDayOfWeek</code>: <i>[可选]</i>表示一周第一天的<code>Day.Type</code>值。可能的值为 <code>Day.Sunday</code>、<code>Day.Monday</code>、<code>Day.Tuesday</code>、<code>Day.Wednesday</code>、<code>Day.Thursday</code>、<code>Day.Friday</code>和<code>Day.Saturday.</code>。默认值为<code>Day.Sunday</code>。</li>      </ul>


## Examples

### Example #1 
获取 5/14/2011 的星期结束值。
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
获取 5/17/2011 05:00:00 PM -7:00 的星期结束值，Sunday 作为该星期的第一天。
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
