---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

분기의 끝을 반환합니다.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

<code>dateTime</code>이(가) 포함된 분기의 끝을 반환합니다. 표준 시간대 정보는 유지됩니다.      <ul>      <li><code>dateTime</code>: 분기의 끝을 계산할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
2011년 10월 10일 오전 8:00가 포함된 분기의 끝을 확인합니다.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
