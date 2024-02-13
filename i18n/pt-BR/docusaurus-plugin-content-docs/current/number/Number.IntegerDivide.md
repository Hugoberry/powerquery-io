---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Divide dois números e retorna a parte inteira do resultado.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Retorna a parte inteira do resultado de divisão de um número, <code>number1</code>, por outro número, <code>number2</code>.    Se <code>number1</code> ou <code>number2</code> forem nulos, <code>Number.IntegerDivide</code> retornará nulo.      <ul>        <li><code>number1</code>: o dividendo.</li>        <li><code>number2</code>: o divisor.</li>      </ul>


## Examples

### Example #1 
Divide 6 por 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2 
Divide 8,3 por 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
