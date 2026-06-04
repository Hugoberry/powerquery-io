---
title: Int8.From
---

# Int8.From


지정된 값에서 부호 있는 8비트 정수를 만듭니다.


## Syntax

```powerquery
Int8.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

지정된 `value`에서 부호 있는 8비트 정수 `number` 값을 반환합니다. 지정된 `value`이(가) `null`이면 `Int8.From`에서 `null`을 반환합니다. 지정된 `value`이(가) 소수 부분 없이 부호 있는 8비트 정수 범위 내의 `number`이면 `value`이(가) 반환됩니다. 소수 부분이 있으면 숫자가 지정된 반올림 모드로 반올림됩니다. 기본 반올림 모드는 `RoundingMode.ToEven`입니다. `value`이(가) 기타 형식이면 `Number.FromText`를 사용하여 먼저 `number`로 변환합니다. 사용할 수 있는 반올림 모드는 `Number.Round`를 참조하세요. 선택적 `culture`(예: “en-US”)이(가) 제공될 수도 있습니다.


## Examples

### Example #1
`"4"`의 부호 있는 8비트 정수 `number` 값을 가져옵니다.
```powerquery
Int8.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`RoundingMode.AwayFromZero`를 사용하여 `"4.5"`의 부호 있는 8비트 정수 `number` 값을 가져옵니다.
```powerquery
Int8.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
