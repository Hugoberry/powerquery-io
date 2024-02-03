---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

주의 끝을 반환합니다.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

<code>dateTime</code>이(가) 포함된 주의 끝을 반환합니다.    이 함수는 선택 사항인 <code>Day</code>, <code>firstDayOfWeek</code>을(를) 사용하여 이 상대적 계산에 첫 번째 요일로 설정합니다. 기본값은 <code>Day.Sunday</code>입니다.      <ul>        <li><code>dateTime</code>: 주의 마지막 요일을 계산할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>        <li><code>firstDayOfWeek</code>: <i>[선택 사항]</i> 주의 첫 번째 요일을 나타내는 <code>Day.Type</code> 값입니다. 가능한 값은 <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code>및 <code>Day.Saturday.</code>이고, 기본값은 <code>Day.Sunday</code>입니다.</li>      </ul>


## Examples

### Example #1 
2011년 5월 14일에 대한 주의 끝을 가져옵니다.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
일요일이 주의 첫 번째 요일일 경우 2011년 5월 17일 오후 05:00:00 -7:00에 대한 주의 끝을 가져옵니다.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
