---
title: Time.ToRecord
---

# Time.ToRecord


Time 값의 부분을 포함하는 레코드를 반환합니다.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

지정된 Time 값 `time`의 부분을 포함하는 레코드를 반환합니다.

-   `time`: 해당 부분의 레코드가 계산될 `time` 값입니다.


## Examples

### Example #1
`#time(11, 56, 2)` 값을 Time 값을 포함하는 레코드로 변환합니다.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
