---
title: List.Skip
---

# List.Skip


Retorna uma lista que ignora o número especificado de elementos no início da lista.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Retorna uma lista que ignora o primeiro elemento da lista `list`. Se `list` for uma lista vazia, uma lista vazia será retornada. Essa função usa um parâmetro opcional, `countOrCondition`, para dar suporte a ignorar vários valores, conforme listado abaixo.

-   Se um número for especificado, serão ignorados itens até esse valor.
-   Se uma condição for especificada, todos os itens correspondentes consecutivos no início do `list` serão ignorados.
-   Se esse parâmetro for nulo, o comportamento padrão será observado.


## Examples

### Example #1
Crie uma lista a partir de \{1, 2, 3, 4, 5\} sem os três primeiros números.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Crie uma lista a partir de \{5, 4, 2, 6, 1\} que comece com um número menor que 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
