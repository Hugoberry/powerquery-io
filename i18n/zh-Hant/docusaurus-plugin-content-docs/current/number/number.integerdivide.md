---
title: Number.IntegerDivide
---

# Number.IntegerDivide


將兩個數字相除，然後傳回結果的整數部分。


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

將數字 `number1` 除以另一個數字 `number2`，然後傳回結果的整數部分。 如果 `number1` 或 `number2` 是 Null，`Number.IntegerDivide` 會傳回 Null。

-   `number1`: 被除數。
-   `number2`: 除數。


## Examples

### Example #1
將 6 除以 4。
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
將 8.3 除以 3。
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
