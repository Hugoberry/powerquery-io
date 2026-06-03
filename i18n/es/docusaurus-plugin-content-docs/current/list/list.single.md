---
title: List.Single
---

# List.Single


Devuelve el único elemento de una lista de longitud uno; de lo contrario, genera un error.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Si solo hay un elemento en la lista `list`, devuelve dicho elemento. Si hay más de un elemento o la lista está vacía, la función genera un error.


## Examples

### Example #1
Buscar el único valor de la lista \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Buscar el único valor de la lista \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
