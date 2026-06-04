---
title: Date.DayOfWeek
---

# Date.DayOfWeek


제공된 값의 요일을 나타내는 숫자(0~6)를 반환합니다.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

제공된 `dateTime`의 요일을 나타내는 숫자(0~6)를 반환합니다.

-   `dateTime`: `date`, `datetime` 또는 `datetimezone` 값입니다.
-   `firstDayOfWeek`: 첫 번째 요일로 간주해야 하는 날을 나타내는 `Day` 값입니다. 허용되는 값은 Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday 또는 Day.Saturday입니다. 지정하지 않을 경우 문화권에 따른 기본값이 사용됩니다.


## Examples

### Example #1
일요일을 첫 번째 요일로 간주하여 요일을 2011년 2월 21일 월요일로 표시합니다.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
월요일을 첫 번째 요일로 간주하여 요일을 2011년 2월 21일 월요일로 표시합니다.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
