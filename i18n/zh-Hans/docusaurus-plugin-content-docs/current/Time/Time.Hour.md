---
title: Time.Hour
---

# Time.Hour


返回小时部分。


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

返回所提供的 <code>time</code>、<code>datetime</code> 或 <code>datetimezone</code> 值 <code>dateTime</code> 的小时部分。


## Examples

### Example #1 
查找 #datetime(2011, 12, 31, 9, 15, 36) 中的小时。
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
