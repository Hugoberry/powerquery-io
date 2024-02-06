---
title: Time.Minute
---

# Time.Minute


返回分钟部分。


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

返回所提供的 <code>time</code>、<code>datetime</code> 或 <code>datetimezone</code> 值 <code>dateTime</code> 的分钟部分。


## Examples

### Example #1 
查找 #datetime(2011, 12, 31, 9, 15, 36) 中的分钟。
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
