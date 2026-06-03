---
title: List.Mode
---

# List.Mode


Retorna o valor mais frequente da lista.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Retorna o item que aparece com mais frequência em `list`. Se a lista estiver vazia, um erro será gerado. Se vários itens aparecerem com a mesma frequência máxima, o último será escolhido. Um valor opcional de critérios de comparação, `equationCriteria`, pode ser especificado para controlar o teste de igualdade.


## Examples

### Example #1
Localize o item exibido com mais frequência na lista `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Localize o item exibido com mais frequência na lista `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
