---
title: Date.ToRecord
---

# Date.ToRecord


date 값의 일부를 포함하는 레코드를 반환합니다.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

지정된 date 값 `date`의 일부를 포함하는 레코드를 반환합니다.

-   `date`: 일부분의 레코드를 계산할 `date` 값입니다.


## Examples

### Example #1
`#date(2011, 12, 31)` 값을 date 값의 일부를 포함하는 레코드로 변환합니다.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
