---
title: Time.StartOfHour
---

# Time.StartOfHour


시간의 시작을 반환합니다.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

`dateTime`(으)로 표현되는 시간의 시작을 반환합니다. `dateTime`은(는) `time`, `datetime` 또는 `datetimezone` 값이어야 합니다.


## Examples

### Example #1
2011년 10월 10일 오전 8:10:32가 포함된 시간의 시작을 확인합니다.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
