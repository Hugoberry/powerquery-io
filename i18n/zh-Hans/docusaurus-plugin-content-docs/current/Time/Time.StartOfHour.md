---
title: Time.StartOfHour
---

# Time.StartOfHour


返回小时开始值。


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

返回 <code>dateTime</code> 表示的小时开始值。    <code>dateTime</code> 必须是 <code>time</code>、<code>datetime</code>或<code>datetimezone</code>值。


## Examples

### Example #1 
查找 2011 年 10 月 10 日上午 8:10:32 的小时开始值。
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
