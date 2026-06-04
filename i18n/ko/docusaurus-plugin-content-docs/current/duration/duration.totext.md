---
title: Duration.ToText
---

# Duration.ToText


"d.h:m:s" 형식의 텍스트를 반환합니다.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

지정된 기간 값 `duration`을(를) "day.hour:mins:sec" 형태의 텍스트 표현으로 반환합니다.

-   `duration`: 텍스트 표현이 계산되는 `duration`입니다.
-   `format`: *(선택 사항)* 더 이상 사용되지 않으며 null이 아닌 경우 오류가 발생합니다.


## Examples

### Example #1
`#duration(2, 5, 55, 20)`을 텍스트 값으로 변환합니다.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
