---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


## Description

시스템의 현재 날짜 및 시간을 기준으로 이 날짜가 다음 몇 년 이내에 속하는지 여부를 나타냅니다. 현재 연도에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

지정된 datetime 값 <code>dateTime</code>이(가) 시스템의 현재 날짜 및 시간을 기준으로 다음 몇 년 이내에 속하는지 여부를 나타냅니다. 현재 연도에 속하는 값을 전달하는 경우 이 함수는 False를 반환합니다.      <ul>      <li><code>dateTime</code>: 평가할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      <li><code>years</code>: 년도 수입니다.</li>      </ul>


## Examples

### Example #1 
현재 시스템 시간 이후의 년도가 향후 2년 이내에 있는지 여부를 확인합니다.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
