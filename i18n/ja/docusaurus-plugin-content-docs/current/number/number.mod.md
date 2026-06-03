---
title: Number.Mod
---

# Number.Mod


2 つの数値を整数除算して剰余を返します。


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

`divisor` による `number` の整数除算の結果の剰余を返します。 `number` または `divisor` が `null` の場合、この関数は `null` を返します。

-   `number`: 被除数。
-   `divisor`: 除数。
-   `precision`: (省略可能) 整数除算の有効桁数。このパラメーターは、`Precision.Double` (`Double` 精度の場合)、または `Decimal` 有効桁数の場合は `Precision.Decimal` のいずれかを指定できます。既定値は `Precision.Double` です。


## Examples

### Example #1
5 を 3 で除算した場合の剰余を求めます。
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
10.5 を 0.2 で除算するとき、`Double` 精度と `Decimal` 有効桁数の両方を使用して、剰余を見つけます。
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
