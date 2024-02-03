---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Divide dos números y devuelve la parte entera del resultado.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Devuelve la parte entera del resultado de dividir un número <code>number1</code>, por otro número <code>number2</code>.    Si <code>number1</code> o <code>number2</code> son "null", <code>Number.IntegerDivide</code> devuelve "null".      <ul>        <li><code>number1</code>: el dividendo.</li>        <li><code>number2</code>: el divisor.</li>      </ul>


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
