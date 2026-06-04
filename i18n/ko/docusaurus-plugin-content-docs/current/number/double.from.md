---
title: Double.From
---

# Double.From


지정된 값에서 Double을 만듭니다.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

지정된 `value`에서 Double `number` 값을 반환합니다. 지정된 `value`이(가) `null`이면 `Double.From`에서 `null`을 반환합니다. 지정된 `value`이(가) Double 범위 내의 `number`이면 `value`이(가) 반환되고, 그렇지 않으면 오류가 반환됩니다. `value`이(가) 다른 형식이면 `Number.FromText`를 사용하여 먼저 `number`로 변환합니다. 선택적 `culture`(예: “en-US”)이(가) 제공될 수도 있습니다.


## Examples

### Example #1
`"4"`의 Double `number` 값을 가져옵니다.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
