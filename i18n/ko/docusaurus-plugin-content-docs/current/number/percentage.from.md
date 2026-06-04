---
title: Percentage.From
---

# Percentage.From


지정된 값에서 백분율 값을 반환합니다.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

지정된 `value`에서 `percentage` 값을 반환합니다. 지정된 `value`이(가) `null`인 경우 `Percentage.From`은 `null`을 반환합니다. 지정된 `value`이(가) 뒤에 백분율 기호가 있는 `text`인 경우 변환된 십진수가 반환됩니다. 그렇지 않은 경우 값은 `Number.From`을 사용하여 `number`로 변환됩니다. 선택적 `culture`(예: “en-US”)이(가) 제공될 수도 있습니다.


## Examples

### Example #1
`"12.3%"`의 `percentage` 값을 가져옵니다.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
