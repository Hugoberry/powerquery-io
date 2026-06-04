---
title: Duration.ToRecord
---

# Duration.ToRecord


기간의 일부를 포함하는 레코드를 반환합니다.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

기간 값 `duration`의 일부를 포함하는 레코드를 반환합니다.

-   `duration`: 레코드를 만드는 데 사용할 `duration`입니다.


## Examples

### Example #1
`#duration(2, 5, 55, 20)`을 일, 시간, 분 및 초(해당되는 경우)를 포함한 해당 부분의 레코드로 변환합니다.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
