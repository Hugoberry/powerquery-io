---
title: Date.EndOfDay
---

# Date.EndOfDay


返回天结束值。


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Remarks

返回 <code>dateTime</code> 表示的天结束值。保留时区信息。 <ul> <li><code>dateTime</code>: 从中计算天结束值的<code>date</code>、<code>datetime</code>或 <code>datetimezone</code>值</li>      </ul>


## Examples

### Example #1 
获取 5/14/2011 05:00:00 PM 的一天结束值。
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
获取 5/17/2011 05:00:00 PM -7:00 的一天结束值。
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
