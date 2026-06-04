---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


값의 표준 시간대 분을 가져옵니다.


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

'datetimezone' 값의 표준 시간대 분 구성 요소를 반환합니다.

-   `dateTimeZone`: 표준 시간대 분 구성 요소가 추출되는 `datetimezone` 값입니다. `dateTimeZone`이(가) `null`이면 함수는 `null`을 반환합니다.


## Examples

### Example #1
지정된 'datetimezone' 값의 표준 시간대 분 구성 요소를 가져옵니다.
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
