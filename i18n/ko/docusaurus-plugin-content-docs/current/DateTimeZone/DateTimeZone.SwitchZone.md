---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


## Description

값의 표준 시간대를 변경합니다.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

datetimezone 값 <code>dateTimeZone</code>의 표준 시간대 정보를 <code>timezoneHours</code> 및 선택적 <code>timezoneMinutes</code>에 의해 제공되는 새 표준 시간대 정보로 변경합니다.    <code>dateTimeZone</code>에 표준 시간대 구성 요소가 없으면 예외가 발생합니다.


## Examples

### Example #1 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30)의 표준 시간대 정보를 8시간으로 변경합니다.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2 
#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30)의 표준 시간대 정보를 -30분으로 변경합니다.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
