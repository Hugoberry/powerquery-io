---
title: Date.StartOfDay
---

# Date.StartOfDay


返回天开始值。


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

返回 <code>dateTime</code> 表示的天开始值。    <code>dateTime</code> 必须是 <code>date</code>、<code>datetime</code>或<code>datetimezone</code>值。


## Examples

### Example #1 
查找 2011 年 10 月 10 日上午 8:00 的天开始值。
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
