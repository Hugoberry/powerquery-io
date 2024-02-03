---
title: Duration.Hours
---

# Duration.Hours


## Description

기간의 시간 부분을 반환합니다.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Details

<code>duration</code> 시간 부분을 반환합니다.


## Examples

### Example #1 
기간 값에서 시간을 추출합니다.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
