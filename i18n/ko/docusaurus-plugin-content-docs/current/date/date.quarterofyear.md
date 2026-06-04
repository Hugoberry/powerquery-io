---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


날짜가 속하는 연도의 분기를 나타내는 숫자를 반환합니다.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

날짜 `dateTime`이(가) 속하는 연도의 분기를 나타내는 1에서 4 사이의 숫자를 반환합니다. `dateTime`은(는) `date`, `datetime` 또는 `datetimezone` 값일 수 있습니다.


## Examples

### Example #1
날짜 #date(2011, 12, 31)가 속하는 연도의 분기를 확인합니다.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
