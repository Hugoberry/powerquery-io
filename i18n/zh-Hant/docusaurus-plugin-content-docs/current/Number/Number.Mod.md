---
title: Number.Mod
---

# Number.Mod


執行兩個數字的整數除法，然後傳回餘數。


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

傳回 `number` 除以 `divisor` 的整數除法餘數。 如果 `number` 或 `divisor` 為`null`，此函式會傳回`null`。

-   `number`: 被除數。
-   `divisor`: 除數。
-   `precision`: (選用) 整數除法的精確度。此參數可設定為`Precision.Double`，表示使用`Double`精確度，或`Precision.Decimal`，表示使用`Decimal`精確度。預設值為`Precision.Double`。


## Examples

### Example #1
找出 5 除以 3 的餘數。
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
使用`Double`和`Decimal`精確度，計算 10.5 除以 0.2 的餘數。
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
