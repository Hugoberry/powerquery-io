---
title: Number.Mod
---

# Number.Mod


Số nguyên chia hai số và trả về số dư.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Trả về phần dư của phép chia số nguyên `number` cho `divisor`. Nếu `number` hoặc `divisor` là `null`, hàm này sẽ trả về `null`.

-   `number`: Số bị chia.
-   `divisor`: Số chia.
-   `precision`: (Tuỳ chọn) Độ chính xác của phép chia số nguyên. Tham số này có thể là `Precision.Double` cho độ chính xác `Double` hoặc `Precision.Decimal` cho độ chính xác `Decimal`. Giá trị mặc định là `Precision.Double`.


## Examples

### Example #1
Tìm số dư khi bạn chia 5 cho 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Tìm số dư khi chia 10,5 cho 0,2, sử dụng cả độ chính xác `Double` và độ chính xác `Decimal`.
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
