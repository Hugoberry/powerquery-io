---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


## Description

이 기간이 걸쳐 있는 총 분 수를 반환합니다.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Details

<code>duration</code>(으)로 범위가 지정된 총 기간(분)을 반환합니다.


## Examples

### Example #1 
기간 값으로 범위가 지정된 총 기간(분)을 찾습니다.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
