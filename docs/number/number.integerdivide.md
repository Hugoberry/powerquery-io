---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Divides two numbers and returns the integer portion of the result.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Returns the integer portion of the result from dividing a number, `number1`, by another number, `number2`. If `number1` or `number2` are null, `Number.IntegerDivide` returns null.

-   `number1`: The dividend.
-   `number2`: The divisor.


## Examples

### Example #1
Divide 6 by 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Divide 8.3 by 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
