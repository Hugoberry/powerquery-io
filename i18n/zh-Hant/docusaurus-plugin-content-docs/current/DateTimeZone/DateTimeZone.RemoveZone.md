---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


從指定的 datetimezone 值移除時區資訊。


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

根據 <code>dateTimeZone</code> 傳回已移除時區資訊的 #datetime 值。


## Examples

### Example #1 
從 #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0) 值移除時區資訊。
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
