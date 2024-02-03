---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

월의 끝을 반환합니다.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

<code>dateTime</code>이(가) 포함된 월의 끝을 반환합니다.      <ul>        <li><code>dateTime</code>: 월의 끝을 계산할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
2011년 5월 14일에 대한 월의 끝을 가져옵니다.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
2011년 5월 17일 오후 05:00:00 -7:00에 대한 월의 끝을 가져옵니다.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
