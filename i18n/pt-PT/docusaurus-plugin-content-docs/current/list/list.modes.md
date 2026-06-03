---
title: List.Modes
---

# List.Modes


Devolve uma lista com os valores mais frequentes existentes na lista.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Devolve os itens que aparecem mais frequentemente em `list`. Se a lista estiver vazia, é gerado um erro. Se aparecerem vários itens com a mesma frequência máxima, todos eles são devolvidos. Pode ser especificado um valor opcional de critério de comparação, `equationCriteria`, para controlar o teste de igualdade.


## Examples

### Example #1
Determinar os itens que aparecem mais frequentemente na lista `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
