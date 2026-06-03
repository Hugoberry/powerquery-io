---
title: List.Modes
---

# List.Modes


Retorna uma lista dos valores mais frequentes da lista.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retorna os itens que aparecem com mais frequência em `list`. Se a lista estiver vazia, um erro será gerado. Se vários itens aparecerem com a mesma frequência máxima, todos eles serão retornados. Um valor opcional de critérios de comparação, `equationCriteria`, pode ser especificado para controlar o teste de igualdade.


## Examples

### Example #1
Localize os itens exibidos com mais frequência na lista `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
