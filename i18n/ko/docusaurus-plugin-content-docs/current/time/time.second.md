---
title: Time.Second
---

# Time.Second


초 구성 요소를 반환합니다.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

제공된 `time`, `datetime` 또는 `datetimezone` 값 `dateTime`의 초 구성 요소를 반환합니다.


## Examples

### Example #1
날짜/시간 값에서 초 값을 찾습니다.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
