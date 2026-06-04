---
title: Number.Mod
---

# Number.Mod


두 숫자에 대해 정수 나누기를 수행하고 나머지를 반환합니다.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

`number`을(를) `divisor`(으)로 나눈 나머지를 반환합니다. `number` 또는 `divisor`이(가) `null`인 경우, 이 함수는 `null`을 반환합니다.

-   `number`: 피제수.
-   `divisor`: 제수.
-   `precision`: (선택 사항) 정수 나눗셈의 정밀도. 이 매개 변수는 `Precision.Double`을 사용하면 `Double` 정밀도, `Precision.Decimal`을 사용하면 `Decimal` 정밀도를 의미합니다. 기본값은 `Precision.Double`입니다.


## Examples

### Example #1
5를 3으로 나눈 나머지를 구합니다.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
10.5를 0.2로 나눌 때 나머지를 `Double` 정밀도와 `Decimal` 정밀도 모두로 구해 보세요.
```powerquery
let
    Dividend = 10.5,
    Divisor = 0.2,

    #"Use Double Precision" = Number.Mod(Dividend, Divisor, Precision.Double),
    #"Use Decimal Precision" = Number.Mod(Dividend, Divisor, Precision.Decimal),

    // Convert to text to inspect precision
    #"Double To Text" = Number.ToText(#"Use Double Precision", "G"),
    #"Decimal To Text" = Number.ToText(#"Use Decimal Precision", "G"),

    #"Display Result" = [
        DoublePrecision = #"Double To Text",
        DecimalPrecision = #"Decimal To Text"
    ]
in
    #"Display Result"
```

Result: 
```powerquery
[
    DoublePrecision = "0.0999999999999994",
    DecimalPrecision = "0.1"
]
```




## Category
Number.Operations
