---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Делит два числа и возвращает целочисленную часть результата.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Возвращает целочисленную часть результата от деления числа `number1` на число `number2`. Если `number1` или `number2` равно NULL, `Number.IntegerDivide` возвращает NULL.

-   `number1`: делимое.
-   `number2`: делитель.


## Examples

### Example #1
Разделить 6 на 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Разделить 8,3 на 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
