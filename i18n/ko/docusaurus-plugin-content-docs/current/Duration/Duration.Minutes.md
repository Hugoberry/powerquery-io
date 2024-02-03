---
title: Duration.Minutes
---

# Duration.Minutes


## Description

기간의 분 부분을 반환합니다.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Details

<code>duration</code> 분 부분을 반환합니다.


## Examples

### Example #1 
기간 값에서 분을 추출합니다.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
