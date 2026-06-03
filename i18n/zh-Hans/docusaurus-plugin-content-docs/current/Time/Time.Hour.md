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

返回所提供的 `time`、`datetime` 或 `datetimezone` 值 `dateTime` 的小时部分。


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
