---
title: Time.Hour
---

# Time.Hour


시간 구성 요소를 반환합니다.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

제공된 `time`, `datetime` 또는 `datetimezone` 값 `dateTime`의 시간 구성 요소를 반환합니다.


## Examples

### Example #1
#datetime(2011, 12, 31, 9, 15, 36)에서 시간을 찾습니다.
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
