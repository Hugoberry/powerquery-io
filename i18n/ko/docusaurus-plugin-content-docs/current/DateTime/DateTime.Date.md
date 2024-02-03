---
title: DateTime.Date
---

# DateTime.Date


## Description

지정된 date, datetime 또는 datetimezone 값의 날짜 구성 요소를 반환합니다.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Details

지정된 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값의 날짜 구성 요소 <code>dateTime</code>을(를) 반환합니다.


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
