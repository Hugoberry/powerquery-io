---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

연도의 끝을 반환합니다.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

<code>dateTime</code>이(가) 포함된 연도의 끝을 반환합니다(소수 자리 초 포함). 표준 시간대 정보는 유지됩니다.      <ul>        <li><code>dateTime</code>: 연도의 끝을 계산할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
2011년 5월 14일 오후 05:00:00에 대한 연도의 끝을 가져옵니다.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
2011년 5월 17일 오후 05:00:00 -7:00에 대한 연도의 끝을 가져옵니다.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
