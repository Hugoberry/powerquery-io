---
title: List.Numbers
---

# List.Numbers


## Description

Devolve unha lista de números indicado un valor inicial, unha conta e un valor de incremento opcional.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

Devolve unha lista de números indicado un valor inicial, unha conta e un valor de incremento opcional. O valor de incremento predefinido é 1.<ul>   <li><code>start</code>: o valor inicial da lista.</li>   <li><code>count</code>: o número de valores que se van crear.</li>   <li><code>increment</code>: <i>[Optional]</i> o valor no que se vai incrementar. Se se omite, os valores increméntanse en 1.</li></ul>


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
