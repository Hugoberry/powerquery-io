---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


將時區元件轉換成本地時區。


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

將 datetimezone 值 <code>dateTimeZone</code> 的時區資訊變更為本地時區資訊。    如果 <code>dateTimeZone</code> 沒有時區元件，則加入本地時區資訊。


## Examples

### Example #1 
將 #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) 的時區資訊變更為本地時區 (假設為 PST)。
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
