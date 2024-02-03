---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

이 기간이 걸쳐 있는 총 시간을 반환합니다.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

<code>duration</code>(으)로 범위가 지정된 총 시간을 반환합니다.


## Examples

### Example #1 
기간 값으로 범위가 지정된 총 시간을 찾습니다.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
