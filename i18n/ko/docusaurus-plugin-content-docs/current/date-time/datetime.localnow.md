---
title: DateTime.LocalNow
---

# DateTime.LocalNow


현지 표준 시간대의 현재 날짜 및 시간을 반환합니다.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

시스템의 현재 날짜 및 시간으로 설정된 `datetime` 값을 반환합니다.  
  
이 함수에서 반환되는 값은 로컬 컴퓨터에서 쿼리를 실행 중인지 온라인 상태인지에 따라 달라집니다. 예를 들어 미국 태평양 표준 시간대에 있는 시스템에서 쿼리를 실행하는 경우 Power Query Desktop은 로컬 컴퓨터에 설정된 날짜 및 시간을 반환합니다. 그러나 클라우드에서 쿼리를 실행하는 경우 Power Query Online은 클라우드 가상 머신에서 설정된 시간(모두 UTC로 설정됨)을 읽고 있기 때문에 UTC 시간을 반환합니다.


## Examples

### Example #1
Power Query 데스크톱을 실행하는 로컬 컴퓨터에서 이 함수를 호출합니다.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Power Query Online을 실행하는 클라우드에서 이 함수를 호출합니다.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
