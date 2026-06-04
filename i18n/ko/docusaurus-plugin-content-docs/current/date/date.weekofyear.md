---
title: Date.WeekOfYear
---

# Date.WeekOfYear


이 날짜가 속하는 연간 주를 나타내는 1에서 54 사이의 숫자를 반환합니다.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

날짜 `dateTime`이(가) 속하는 연도의 주를 나타내는 1에서 54 사이의 숫자를 반환합니다.

-   `dateTime`: week-of-the-year를 확인하는 `datetime` 값입니다.
-   `firstDayOfWeek`: 새로운 한 주의 시작으로 고려할 일을 나타내는 선택적 `Day.Type` 값입니다(예: `Day.Sunday`). 지정하지 않을 경우 문화권에 종속된 기본값이 사용됩니다.


## Examples

### Example #1
2011년 3월 27일이 해당 연도의 몇 번째 주에 속하는지 확인합니다.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
월요일을 주의 시작으로 사용해 2011년 3월 27일이 해당 연도의 몇 번째 주에 속하는지 확인합니다.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
