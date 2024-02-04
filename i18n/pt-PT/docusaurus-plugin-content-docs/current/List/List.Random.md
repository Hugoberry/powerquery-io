---
title: List.Random
---

# List.Random


## Description

Devolve uma lista de números aleatórios.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

Devolve uma lista de números aleatórios entre 0 e 1 a partir do número de valores a gerar e um valor de seed opcional.<ul>   <li><code>count</code>: O número de valores aleatórios a gerar.</li>   <li><code>seed</code>:  <i>[Opcional]</i> Um valor numérico utilizado para o seed do gerador de números aleatórios. Se for omitido, é gerada uma lista exclusiva de números aleatórios sempre que chamar a função. Se especificar o valor de seed com um número, cada chamada à função gera a mesma lista de números aleatórios.</li></ul>


## Examples

### Example #1 
Criar uma lista de 3 números aleatórios.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Criar uma lista de 3 números aleatórios, especificando um valor de seed.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
