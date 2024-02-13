---
title: List.Random
---

# List.Random


Retorna uma lista de números aleatórios.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Retorna uma lista de números aleatórios entre 0 e 1, de acordo com o número de valores a ser gerado e um valor de semente opcional.<ul>   <li><code>count</code>: o número de valores aleatórios a ser gerado.</li>   <li><code>seed</code>:  <i>[opcional]</i> um valor numérico usado para propagar o gerador de números aleatórios. Se omitido, uma lista exclusiva de números aleatórios será gerada cada vez que você chamar a função. Se você especificar o valor de semente com um número, cada chamada à função gerará a mesma lista de números aleatórios.</li></ul>


## Examples

### Example #1 
Crie uma lista de três números aleatórios.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Crie uma lista de três números aleatórios, especificando o valor de semente.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
