---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Divide dous números e devolve a parte enteira do resultado.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Devolve a parte enteira do resultado da división dun número, <code>number1</code>, entre outro número, <code>number2</code>.    Se <code>number1</code> ou <code>number2</code> son nulos, <code>Number.IntegerDivide</code> devolve nulo.      <ul>        <li><code>number1</code>: o dividendo.</li>        <li><code>number2</code>: o divisor.</li>      </ul>


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
