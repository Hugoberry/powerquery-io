---
title: DateTime.ToRecord
---

# DateTime.ToRecord


datetime 값의 일부를 포함하는 레코드를 반환합니다.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

지정된 datetime 값 `dateTime`의 일부를 포함하는 레코드를 반환합니다.

-   `dateTime`: 일부분의 레코드를 계산할 `datetime` 값입니다.


## Examples

### Example #1
`#datetime(2011, 12, 31, 11, 56, 2)` 값을 Date 및 Time 값을 포함하는 레코드로 변환합니다.
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
