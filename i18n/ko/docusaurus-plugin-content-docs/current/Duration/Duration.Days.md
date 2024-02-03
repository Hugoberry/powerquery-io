---
title: Duration.Days
---

# Duration.Days


## Description

기간의 일 부분을 반환합니다.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

<code>duration</code> 일 부분을 반환합니다.


## Examples

### Example #1 
두 날짜 사이의 일 수를 추출합니다.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
