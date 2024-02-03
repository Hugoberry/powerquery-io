---
title: Date.StartOfYear
---

# Date.StartOfYear


## Description

연도의 시작을 반환합니다.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Details

<code>dateTime</code>이(가) 포함된 연도의 시작을 반환합니다.      <code>dateTime</code>은(는) <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값이어야 합니다.


## Examples

### Example #1 
2011년 10월 10일 오전 8:10:32가 포함된 연도의 시작을 확인합니다.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
