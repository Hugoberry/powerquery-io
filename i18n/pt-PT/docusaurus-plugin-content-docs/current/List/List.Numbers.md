---
title: List.Numbers
---

# List.Numbers


Devolve uma lista de números a partir de um valor inicial, uma contagem e um valor de incremento opcional.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Devolve uma lista de números a partir de um valor inicial, uma contagem e um valor de incremento opcional. O valor de incremento predefinido é 1.<ul>   <li><code>start</code>: o valor inicial na lista.</li>   <li><code>count</code>: o número de valores a criar.</li>   <li><code>increment</code>: <i>[Opcional]</i> O valor a incrementar. Se for omitido, os valores são incrementados por 1.</li></ul>


## Examples

### Example #1 
Gerar uma lista de 10 números consecutivos, começando em 1.
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
Gerar uma lista de 10 números começando em 1, com um incremento de 2 para cada número subsequente.
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
