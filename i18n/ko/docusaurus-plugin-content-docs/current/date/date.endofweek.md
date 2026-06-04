---
title: Date.EndOfWeek
---

# Date.EndOfWeek


주의 끝을 반환합니다.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

`dateTime`이(가) 포함된 주말을 반환합니다. 이 함수는 선택 사항인 `Day`, `firstDayOfWeek`을(를) 사용하여 이 상대 계산에서 주의 첫 번째 요일로 설정합니다. 기본값은 `Day.Sunday`입니다.

-   `dateTime`: 주의 마지막 요일이 계산되는 `date`, `datetime` 또는 `datetimezone` 값입니다.
-   `firstDayOfWeek`: *(선택 사항)* 주의 첫번 째 요일을 나타내는 A `Day.Type` 값입니다. 가능한 값은 `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` 및 `Day.Saturday`입니다. 기본값은 `Day.Sunday`입니다.


## Examples

### Example #1
2011년 5월 14일에 대한 주의 끝을 가져옵니다.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
일요일이 주의 첫 번째 요일일 경우 2011년 5월 17일 오후 05:00:00 -7:00에 대한 주의 끝을 가져옵니다.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
