---
title: Date.IsLeapYear
---

# Date.IsLeapYear


이 날짜가 윤년에 속하는지 여부를 나타냅니다.


## Syntax

```powerquery
Date.IsLeapYear(
    dateTime as any
) as logical
```


## Remarks

지정된 datetime 값 `dateTime`이(가) 윤년에 속하는지 여부를 나타냅니다.

-   `dateTime`: 평가할 `date`, `datetime` 또는 `datetimezone` 값입니다.


## Examples

### Example #1
`#date(2012, 01, 01)`가 나타내는 2012년이 윤년인지 여부를 확인합니다.
```powerquery
Date.IsLeapYear(#date(2012, 01, 01))
```

Result: 
```powerquery
true
```




## Category
Date
