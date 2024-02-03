---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

返回该周的开始时间。


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

返回包含 <code>dateTime</code> 的周开始值。    <code>dateTime</code> 必须是 <code>date</code>、<code>datetime</code>或<code>datetimezone</code>值。


## Examples

### Example #1 
查找 2011 年 10 月 11 日星期二所在周的开始时间。
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
查找 2011 年 10 月 11 日星期二所在周的开始时间(使用星期一作为该周开始)。
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
