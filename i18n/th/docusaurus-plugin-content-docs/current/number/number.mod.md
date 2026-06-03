---
title: Number.Mod
---

# Number.Mod


จำนวนเต็มหารสองจำนวนและส่งกลับเศษที่เหลือ


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

ส่งกลับค่าเศษที่เหลือซึ่งเป็นผลมาจากการหารจำนวนเต็มของ `number` ด้วย `divisor` ถ้า `number` หรือ `divisor` เป็น `null` ฟังก์ชันนี้จะแสดง `null`

-   `number`: ตัวตั้ง
-   `divisor`: ตัวหาร
-   `precision`: (เพิ่มเติม) ความแม่นยำของการหารจำนวนเต็ม พารามิเตอร์นี้สามารถเป็นได้ทั้ง `Precision.Double` สำหรับความแม่นยำ`คู่` หรือ `Precision.Decimal` สำหรับความแม่นยำ`ทศนิยม` ค่าเริ่มต้นคือ `Precision.Double`


## Examples

### Example #1
หาเศษที่เหลือเมื่อคุณหาร 5 ด้วย 3
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
หาเศษที่เหลือเมื่อคุณหาร 10.5 ด้วย 0.2 โดยใช้ทั้งความแม่นยำ`คู่` และความแม่นยำ`ทศนิยม`
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
