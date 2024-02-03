---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Chia hai số và trả về phần số nguyên của kết quả.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Trả về phần số nguyên của kết quả sau khi chia một số là <code>number1</code> cho một số khác là <code>number2</code>.    Nếu <code>number1</code> hoặc <code>number2</code> là giá trị null thì <code>Number.IntegerDivide</code> trả về giá trị null.      <ul>        <li><code>number1</code>: Số bị chia.</li>        <li><code>number2</code>: Số chia.</li>      </ul>


## Examples

### Example #1 
Chia 6 cho 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Chia 8.3 cho 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
