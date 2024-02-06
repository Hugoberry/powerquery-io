---
title: List.Range
---

# List.Range


Devolve um subconjunto da lista, começando num desvio.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Devolve um subconjunto da lista, começando no desvio <code>list</code>. Um parâmetro opcional, <code>offset</code>, define o número máximo de itens existente no subconjunto.


## Examples

### Example #1 
Determinar o subconjunto da lista de números entre 1 e 10 começando no desvio 6.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Determinar o subconjunto de comprimento 2 da lista de números entre 1 e 10, começando no desvio 6.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
