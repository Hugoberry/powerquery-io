---
title: List.Union
---

# List.Union


## Description

Devolve a união dos valores da lista encontrados na entrada.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Utiliza uma lista de listas <code>lists</code>, efetua a união dos itens existentes nas listas individuais e devolve-os na lista de saída. Como resultado, a lista devolvida contém todos os itens existentes em quaisquer listas de entrada.    Esta operação mantém uma semântica "bag" tradicional, pelo que os valores duplicados são correspondidos como parte da União.    É possível especificar um valor de critério de equação opcional, <code>equationCriteria</code>, para controlar o teste de igualdade. 


## Examples

### Example #1 
Criar uma união da lista \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
