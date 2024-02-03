---
title: List.Single
---

# List.Single


## Description

Devolve o elemento un da lista para unha lista de lonxitude un, se non, xera unha excepción.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Se só hai un elemento na lista <code>list</code>, devolve ese elemento.    Se hai máis dun elemento ou a lista está baleira, a función xera unha excepción.


## Examples

### Example #1 
Buscar o valor único da lista \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Buscar o valor único da lista \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
