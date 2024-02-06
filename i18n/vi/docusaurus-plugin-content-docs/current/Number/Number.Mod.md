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

Trả về số dư trong kết quả chia số nguyên của <code>number</code> cho <code>divisor</code>.    Nếu <code>number</code> hoặc <code>divisor</code> là giá trị null thì <code>Number.Mod</code> trả về giá trị null.      <ul>        <li><code>number</code>: Số bị chia.</li>        <li><code>divisor</code>: Số chia.</li>      </ul>


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




## Category
Number.Operations
