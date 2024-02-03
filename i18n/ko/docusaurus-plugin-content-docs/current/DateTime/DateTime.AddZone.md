---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

날짜/시간 값에 표준 시간대 정보를 추가합니다.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

<code>dateTime</code> 값에 표준 시간대 정보를 추가합니다. 표준 시간대 정보에는 UTC 시간에서 원하는 오프셋을 지정하는 <code>timezoneHours</code>이(가) 포함되며 택적으로 <code>timezoneMinutes</code>이(가) 포함됩니다.


## Examples

### Example #1 
표준 시간대를 UTC+7:30(UTC 이후 7시간 30분)으로 설정합니다.
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
