---
title: List.Mode
---

# List.Mode


Devolve o valor mais frequente da lista.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Devolve o item que aparece mais frequentemente em `list`. Se a lista estiver vazia, é gerado um erro. Se aparecerem vários itens com a mesma frequência máxima, é selecionado o último. Pode ser especificado um valor opcional de critério de comparação, `equationCriteria`, para controlar o teste de igualdade.


## Examples

### Example #1
Determinar o item que aparece mais frequentemente na lista `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Determinar o item que aparece mais frequentemente na lista `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
