---
title: Time.Minute
---

# Time.Minute


분 구성 요소를 반환합니다.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

제공된 `time`, `datetime` 또는 `datetimezone` 값 `dateTime`의 분 구성 요소를 반환합니다.


## Examples

### Example #1
#datetime(2011, 12, 31, 9, 15, 36)에서 분을 찾습니다.
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
