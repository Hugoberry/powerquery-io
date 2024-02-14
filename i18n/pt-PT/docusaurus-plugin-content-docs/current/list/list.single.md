---
title: List.Single
---

# List.Single


Devolve o único item existente numa lista de comprimento um; caso contrário, emite uma exceção.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Se só existir um item na lista <code>list</code>, devolve esse item.    Se existir mais de um item ou se a lista estiver vazia, a função emite uma exceção.


## Examples

### Example #1 
Determinar o valor único na lista \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Determinar o valor único na lista \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
