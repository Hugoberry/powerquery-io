---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

이 기간이 걸쳐 있는 총 일수를 반환합니다.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

<code>duration</code>(으)로 범위가 지정된 총 일 수를 반환합니다.


## Examples

### Example #1 
기간 값으로 범위가 지정된 총 일 수를 찾습니다.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
