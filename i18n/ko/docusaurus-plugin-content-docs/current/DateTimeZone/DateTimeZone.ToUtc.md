---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

표준 시간대 구성 요소를 UTC 표준 시간대로 변환합니다.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

datetime 값 <code>dateTimeZone</code>의 표준 시간대 정보를 UTC(Coordinated Universal Time) 표준 시간대 정보로 변경합니다.    <code>dateTimeZone</code>에 표준 시간대 구성 요소가 없으면 UTC 표준 시간대 정보가 추가됩니다.


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30)의 표준 시간대 정보를 UTC 표준 시간대로 변경합니다.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
