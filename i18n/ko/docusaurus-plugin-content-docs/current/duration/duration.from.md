---
title: Duration.From
---

# Duration.From


지정된 값에서 duration을 만듭니다.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

지정된 값에서 기간 값을 반환합니다.

-   `value`: 기간이 파생되는 값입니다. 지정된 `value`이(가) `null`인 경우 이 함수는 `null`을 반환합니다. 지정된 `value`이(가) `duration`인 경우, `value`을(를) 반환합니다. 다음 형식의 값은 `duration` 값으로 변환할 수 있습니다.
    -   `text`: 텍스트로 된 경과 시간 형식(d.h:m:s)으로 `duration` 값을 생성합니다. 자세한 내용은 `Duration.FromText`를 참조하세요.
    -   `number`: `value`(으)로 표현된 정수와 소수 일 수에 해당하는 `duration` 값입니다.

`value`이(가) 다른 유형이면 오류가 반환됩니다.


## Examples

### Example #1
`2.525`를 `duration` 값으로 변환합니다.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
텍스트 값 `"2.05:55:20.34567"`을 `duration` 값으로 변환합니다.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
