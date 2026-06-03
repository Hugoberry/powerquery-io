---
title: List.Single
---

# List.Single


Retorna o único item de lista para uma lista de comprimento um, caso contrário, gera um erro.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Se houver apenas um item na lista `list`, retorna esse item. Se houver mais de um item ou se a lista estiver vazia, a função gerará um erro.


## Examples

### Example #1
Localize o valor único na lista \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Localize o valor único na lista \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
