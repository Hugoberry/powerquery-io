---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

이 날짜가 속하는 연간 주를 나타내는 1에서 54 사이의 숫자를 반환합니다.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

날짜 <code>dateTime</code>이(가) 속하는 연도의 주를 나타내는 1에서 54 사이의 숫자를 반환합니다. <ul>        <li><code>dateTime</code>: week-of-the-year를 확인하는 <code>datetime</code> 값입니다.</li>        <li><code>firstDayOfWeek</code>: 새로운 한 주의 시작으로 고려할 일을 나타내는 선택적 <code>Day.Type</code> 값입니다(예: <code>Day.Sunday</code>). 지정하지 않을 경우 문화권에 종속된 기본값이 사용됩니다.</li>      </ul>


## Examples

### Example #1 
2011년 3월 27일이 해당 연도의 몇 번째 주에 속하는지 확인합니다.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
월요일을 주의 시작으로 사용해 2011년 3월 27일이 해당 연도의 몇 번째 주에 속하는지 확인합니다.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
