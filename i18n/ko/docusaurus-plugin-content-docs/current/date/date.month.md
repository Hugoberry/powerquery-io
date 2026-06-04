---
title: Date.Month
---

# Date.Month


월 구성 요소를 반환합니다.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

지정된 `datetime` 값 `dateTime`의 월 구성 요소를 반환합니다.


## Examples

### Example #1
#datetime(2011, 12, 31, 9, 15, 36)의 월을 확인합니다.
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
