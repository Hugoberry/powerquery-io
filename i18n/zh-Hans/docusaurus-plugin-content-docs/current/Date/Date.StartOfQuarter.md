---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


返回季度开始值。


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

返回包含 <code>dateTime</code> 的季度开始值。    <code>dateTime</code> 必须是 <code>date</code>、<code>datetime</code>或<code>datetimezone</code>值。


## Examples

### Example #1 
查找 2011 年 10 月 10 日上午 8:00 的季度开始值。
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
