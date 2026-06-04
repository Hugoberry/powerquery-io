---
title: List.Numbers
---

# List.Numbers


Devolve unha lista de números indicado un valor inicial, unha conta e un valor de incremento opcional.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Devolve unha lista de números dados un valor inicial, unha conta e un valor de incremento opcional. O valor de incremento predeterminado é 1.

-   `start` : O valor inicial da lista.
-   `count` : O número de valores a crear.
-   `increment` : *(Opcional)* O valor que se vai incrementar. Se se omiten, os valores increméntanse en 1.


## Examples

### Example #1
Xerar unha lista de 10 números consecutivos comezando en 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2
Xerar unha lista de 10 números comezando en 1, cun incremento de 2 para cada número posterior.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
