---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Divide dos números y devuelve la parte entera del resultado.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Devuelve la parte entera del resultado de dividir un número `number1`, por otro número `number2`. Si `number1` o `number2` son "null", `Number.IntegerDivide` devuelve "null".

-   `number1`: el dividendo.
-   `number2`: el divisor.


## Examples

### Example #1
Divide 6 entre 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Divide 8,3 entre 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
