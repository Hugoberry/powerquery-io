---
title: DateTime.Date
---

# DateTime.Date


지정된 date, datetime 또는 datetimezone 값의 날짜 구성 요소를 반환합니다.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

매개 변수가 `date`, `datetime` 또는 `datetimezone` 값인 경우 `dateTime` 매개 변수의 날짜 구성 요소를 반환하고, 매개 변수가 `null`인 경우 `null`을 반환합니다.


## Examples

### Example #1
#datetime(2010, 12, 31, 11, 56, 02)의 날짜 값을 확인합니다.
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
