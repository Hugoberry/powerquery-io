---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


返回季度结束值。


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

返回包含 <code>dateTime</code> 的季度结束值。保留时区信息。 <ul> <li><code>dateTime</code>: 从中计算季度结束值的<code>date</code>、<code>datetime</code>或 <code>datetimezone</code>值</li>      </ul>


## Examples

### Example #1 
查找 2011 年 10 月 10 日上午 8:00 的季度结束值。
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
