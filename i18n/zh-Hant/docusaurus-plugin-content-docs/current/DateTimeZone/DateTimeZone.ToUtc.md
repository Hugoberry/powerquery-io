---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


將時區元件轉換成 UTC 時區。


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

將 datetime 值 <code>dateTimeZone</code> 的時區資訊變更為 UTC 或國際標準時間時區資訊。    如果 <code>dateTimeZone</code> 沒有時區元件，則加入 UTC 時區資訊。


## Examples

### Example #1 
將 #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) 的時區資訊變更為 UTC 時區。
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
