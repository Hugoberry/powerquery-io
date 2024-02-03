---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

연간 일을 나타내는 1에서 366 사이의 숫자를 반환합니다.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

지정된 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값 <code>dateTime</code>의 연간 일을 나타내는 숫자를 반환합니다.


## Examples

### Example #1 
2011년 3월 1일이 해당 연도의 몇 번째 날에 속하는지 확인합니다.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
