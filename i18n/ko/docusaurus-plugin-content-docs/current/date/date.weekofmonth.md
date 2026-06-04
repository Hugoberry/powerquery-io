---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


이 날짜가 속하는 월의 주를 나타내는 1에서 6 사이의 숫자를 반환합니다.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

날짜 `dateTime`이(가) 속하는 월의 주를 나타내는 1에서 6 사이의 숫자를 반환합니다.

-   `dateTime`: 월간 주를 확인할 `datetime` 값입니다.


## Examples

### Example #1
2011년 3월 15일이 3월의 몇 번째 주에 속하는지 확인합니다.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
