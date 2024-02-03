---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

이 날짜가 속하는 월의 주를 나타내는 1에서 6 사이의 숫자를 반환합니다.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

날짜 <code>dateTime</code>이(가) 속하는 월의 주를 나타내는 1에서 6 사이의 숫자를 반환합니다. <ul>        <li><code>dateTime</code>: 월간 주를 확인할 <code>datetime</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
2011년 3월 15일이 3월의 몇 번째 주에 속하는지 확인합니다.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
