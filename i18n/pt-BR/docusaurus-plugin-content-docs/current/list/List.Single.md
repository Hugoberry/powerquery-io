---
title: List.Single
---

# List.Single


Retorna o item de lista 1 de uma lista de comprimento 1; caso contrário, uma exceção será lançada.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Se houver somente um item na lista <code>list</code>, esse item será retornado.    Se houver mais de um item ou se a lista estiver vazia, a função gerará uma exceção.


## Examples

### Example #1 
Localize o valor único na lista \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Localize o valor único na lista \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
