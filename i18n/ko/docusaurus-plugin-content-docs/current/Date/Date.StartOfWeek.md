---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

주의 시작을 반환합니다.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

<code>dateTime</code>이(가) 포함된 주의 시작을 반환합니다.      <code>dateTime</code>은(는) <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값이어야 합니다.


## Examples

### Example #1 
2011년 10월 11일 화요일 주의 시작을 확인하세요.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
월요일을 주의 시작으로 사용하여 2011년 10월 11일 화요일 주의 시작을 찾습니다.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
