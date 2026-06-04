---
title: Duration.FromText
---

# Duration.FromText


텍스트 경과 시간 형식(d.h:m:s)에서 기간 값을 반환합니다.


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

지정된 텍스트 `text`에서 기간 값을 반환합니다. 이 함수는 다음 형식을 구문 분석할 수 있습니다.

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(모든 범위가 포함됨)

-   ddd: 일 수입니다.
-   hh: 0에서 23 사이의 시간 수입니다.
-   mm: 0에서 59 사이의 분 수입니다.
-   ss: 0에서 59 사이의 초 수입니다.
-   ff: 0에서 9999999 사이의 초의 소수 부분입니다.


## Examples

### Example #1
`"2.05:55:20"`을 `duration` 값으로 변환합니다.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
