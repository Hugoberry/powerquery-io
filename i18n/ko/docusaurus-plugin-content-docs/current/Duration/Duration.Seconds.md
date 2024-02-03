---
title: Duration.Seconds
---

# Duration.Seconds


## Description

기간의 초 부분을 반환합니다.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Details

<code>duration</code> 초 부분을 반환합니다.


## Examples

### Example #1 
기간 값에서 초를 추출합니다.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
