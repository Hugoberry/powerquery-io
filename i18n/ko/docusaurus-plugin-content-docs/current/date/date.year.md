---
title: Date.Year
---

# Date.Year


연도 구성 요소를 반환합니다.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

지정된 `datetime` 값 `dateTime`의 연도 구성 요소를 반환합니다.


## Examples

### Example #1
#datetime(2011, 12, 31, 9, 15, 36)의 연도를 확인합니다.
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
