---
title: Date.StartOfMonth
---

# Date.StartOfMonth


傳回月度開始時間。


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

傳回包含 <code>dateTime</code> 的月度開始時間。    <code>dateTime</code>必須是 <code>date</code> 或 <code>datetime</code>值。


## Examples

### Example #1 
找出 2011 年 10 月 10 日上午 8:10:32 的月度開始時間。
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
