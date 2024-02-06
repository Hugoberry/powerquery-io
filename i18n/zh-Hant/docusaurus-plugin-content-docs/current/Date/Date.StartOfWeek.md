---
title: Date.StartOfWeek
---

# Date.StartOfWeek


傳回當週的開頭。


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

傳回包含 <code>dateTime</code> 的週度開始時間。    <code>dateTime</code> 必須是 <code>date</code>、<code>datetime</code> 或 <code>datetimezone</code> 值。


## Examples

### Example #1 
尋找 2011 年 10 月 11 日星期二當週的開頭。
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
尋找 2011 年 10 月 11 日星期二當週的開頭，使用星期一做為當週的開頭。
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
