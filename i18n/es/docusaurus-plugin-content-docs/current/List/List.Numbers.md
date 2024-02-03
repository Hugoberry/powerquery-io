---
title: List.Numbers
---

# List.Numbers


## Description

Devuelve una lista de números dado un valor inicial, un recuento y un valor de incremento opcional.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

Devuelve una lista de números dado un valor inicial, un recuento y un valor de incremento opcional. El valor de incremento predeterminado es 1.<ul>   <li><code>start</code>: el valor inicial de la lista.</li>   <li><code>count</code>: número de valores que crear.</li>   <li><code>increment</code>: <i>[opcional]</i> el valor en el que incrementar. Si los valores omitidos se incrementan en 1.</li></ul>


## Examples

### Example #1 
Generar una lista de 10 números consecutivos que empieza en 1.
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
Generar una lista de 10 números que empieza en 1, con un incremento de 2 para cada número posterior.
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
