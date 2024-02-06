---
title: Time.Second
---

# Time.Second


返回秒部分。


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

返回所提供的 <code>time</code>、<code>datetime</code> 或 <code>datetimezone</code> 值 <code>dateTime</code> 的秒部分。


## Examples

### Example #1 
查找日期时间值中的秒值。
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
