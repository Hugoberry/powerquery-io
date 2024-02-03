---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


## Description

이 기간이 걸쳐 있는 총 초 수를 반환합니다.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Details

<code>duration</code>(으)로 범위가 지정된 총 기간(초)을 반환합니다.


## Examples

### Example #1 
기간 값으로 범위가 지정된 총 기간(초)을 찾습니다.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
