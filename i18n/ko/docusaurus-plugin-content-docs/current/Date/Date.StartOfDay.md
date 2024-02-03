---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

하루의 시작을 반환합니다.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

<code>dateTime</code>(으)로 표현되는 일의 시작을 반환합니다.    <code>dateTime</code>은(는) <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값이어야 합니다.


## Examples

### Example #1 
2011년 10월 10일 오전 8:00가 포함된 하루의 시작을 확인합니다.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
