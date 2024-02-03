---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


## Description

현지 표준 시간대의 현재 날짜 및 시간을 반환합니다. 이 값은 고정되므로 이후 호출에서도 변경되지 않습니다.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Details

시스템의 현재 날짜 및 시간으로 설정된 <code>datetime</code> 값을 반환합니다. 반환되는 값에는 현지 표준 시간대를 나타내는 표준 시간대 정보가 포함됩니다. 이 값은 고정되므로 식을 실행할 때마다 다른 값을 반환할 수 있는 DateTimeZone.LocalNow와 달리 이후 호출에서도 변경되지 않습니다.



## Category
DateTimeZone
