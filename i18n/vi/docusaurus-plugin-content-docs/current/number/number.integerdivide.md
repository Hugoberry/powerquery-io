---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Chia hai số và trả về phần số nguyên của kết quả.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Trả về phần số nguyên của kết quả sau khi chia một số là `number1` cho một số khác là `number2`. Nếu `number1` hoặc `number2` là giá trị null thì `Number.IntegerDivide` trả về giá trị null.

-   `number1`: Số bị chia.
-   `number2`: Số chia.


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
