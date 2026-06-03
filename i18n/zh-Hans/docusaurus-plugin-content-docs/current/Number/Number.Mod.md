---
title: Number.Mod
---

# Number.Mod


使两个数整除并返回余数。


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

返回 `number` 除以 `divisor` 取整后所得的余数。 如果 `number` 或 `divisor` 为 `null`，则此函数将返回 `null`。

-   `number`: 被除数。
-   `divisor`: 除数。
-   `precision`: (可选) 整数除法的精度。此参数可以是 `Precision.Double`，表示 `Double` 精度，或者为 `Precision.Decimal`，表示 `Decimal` 精度。默认值为 `Precision.Double`。


## Examples

### Example #1
计算 5 除以 3 所得的余数。
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
使用 `Double` 精度和 `Decimal` 精度计算 10.5 除以 0.2 的余数。
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
