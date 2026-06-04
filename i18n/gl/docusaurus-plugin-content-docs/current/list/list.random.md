---
title: List.Random
---

# List.Random


Devolve unha lista de números aleatorios.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Devolve unha lista de números aleatorios entre 0 e 1, dado o número de valores a xerar e un valor inicial opcional.

-   `count` : O número de valores aleatorios a xerar.
-   `seed` : *(Opcional)* Un valor numérico usado para dar orixe ao xerador de números aleatorios. Se se omite, xérase unha lista única de números aleatorios cada vez que se chama a función. Se se especifica o valor inicial cun número, cada chamada á función xera a mesma lista de números aleatorios.


## Examples

### Example #1
Crear unha lista de 3 números aleatorios.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2
Crear unha lista de 3 números aleatorios, especificando o valor de propagación.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
