---
title: List.Numbers
---

# List.Numbers


Retorna uma lista de números a partir de um valor inicial, uma contagem e um valor de incremento opcional.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Retorna uma lista de números a partir de um valor inicial, uma contagem e um valor de incremento opcional. O valor de incremento padrão é 1.<ul>   <li><code>start</code>: O valor inicial da lista.</li>   <li><code>count</code>: O número de valores a ser criado.</li>   <li><code>increment</code>: <i>[Opcional]</i> O valor que servirá de base para o incremento. Se omitido, os valores serão incrementados em 1.</li></ul>


## Examples

### Example #1 
Gere uma lista de dez números consecutivos começando por 1.
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
Gere uma lista de dez números começando por 1, com um incremento de 2 para cada número subsequente.
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
