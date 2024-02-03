---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


## Description

지정된 datetimezone 값에서 표준 시간대 정보를 제거합니다.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Details

<code>dateTimeZone</code>에서 표준 시간대 정보가 제거된 #datetime 값을 반환합니다.


## Examples

### Example #1 
#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0) 값에서 표준 시간대 정보를 제거합니다.
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
