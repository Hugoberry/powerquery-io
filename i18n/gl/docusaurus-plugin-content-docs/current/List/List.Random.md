---
title: List.Random
---

# List.Random


## Description

Devolve unha lista de números aleatorios.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

Devolve unha lista de números aleatorios entre 0 e 1, co número de valores que se van xerar e un valor de propagación opcional indicados.<ul>   <li><code>count</code>: o número de valores aleatorios que se van xerar.</li>   <li><code>seed</code>: <i>[Optional]</i> un valor numérico usado para propagar o xerador de números aleatorios. Se se omite, xérase unha lista única de números aleatorios cada vez que chame á función. Se especifica o valor de propagación cun número, cada chamada á función xera a mesma lista de números aleatorios.</li></ul>


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
