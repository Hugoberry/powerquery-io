---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Divide dois números e devolve a parte inteira do resultado.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Devolve a parte inteira do resultado da divisão de um número, `number1`, por outro número, `number2`. Se `number1` ou `number2` forem nulos, `Number.IntegerDivide` devolve um valor nulo.

-   `number1`: o dividendo.
-   `number2`: o divisor.


## Examples

### Example #1
Dividir 6 por 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Dividir 8,3 por 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
