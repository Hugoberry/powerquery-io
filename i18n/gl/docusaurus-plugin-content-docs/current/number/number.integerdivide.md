---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Divide dous números e devolve a parte enteira do resultado.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Devolve a parte enteira do resultado da división dun número, `number1`, entre outro número, `number2`. Se `number1` ou `number2` son nulos, `Number.IntegerDivide` devolve nulo.

-   `number1`: o dividendo.
-   `number2`: o divisor.


## Examples

### Example #1
Dividir 6 entre 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Dividir 8,3 entre 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
