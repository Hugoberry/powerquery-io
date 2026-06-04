---
title: Number.IntegerDivide
---

# Number.IntegerDivide


使两个数相除，返回结果的整数部分。


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

返回一个数 `number1` 除以另一个数 `number2` 所得结果的整数部分。 如果 `number1` 或 `number2` 为 null，则 `Number.IntegerDivide` 返回 null。

-   `number1`: 被除数。
-   `number2`: 除数。


## Examples

### Example #1
6 除以 4。
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
8.3 除以 3。
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
