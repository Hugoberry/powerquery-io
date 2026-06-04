---
title: Currency.From
---

# Currency.From


지정된 값에서 통화 값을 반환합니다.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

지정된 `value`에서 `currency` 값을 반환합니다. 지정된 `value`이(가) `null`이면 `Currency.From`에서 `null`을 반환합니다. 지정된 `value`이(가) 통화 범위 내의 `number`이면 `value`의 소수부가 4자릿수로 반올림되어 반환됩니다. 지정된 `value`이(가) 기타 형식이면 `Number.FromText`를 사용하여 먼저 `number`로 변환합니다. 유효한 통화 범위는 `-922,337,203,685,477.5808`에서 `922,337,203,685,477.5807` 사이입니다. 사용할 수 있는 반올림 모드는 `Number.Round`를 참조하세요. 기본값은 `RoundingMode.ToEven`입니다. 선택적 `culture`(예: “en-US”)이(가) 제공될 수도 있습니다.


## Examples

### Example #1
`"1.23455"`의 `currency` 값을 가져옵니다.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
`RoundingMode.Down`을 사용하여 `"1.23455"`의 `currency` 값을 가져옵니다.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
