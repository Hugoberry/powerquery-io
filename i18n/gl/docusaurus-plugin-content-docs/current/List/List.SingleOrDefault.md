---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Devolve o elemento un da lista para unha lista de lonxitude un e o valor predefinido para unha lista baleira.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Se só hai un elemento na lista <code>list</code>, devolve ese elemento.    Se a lista está baleira, a función devolve nulo a non ser que se especifique un valor <code>default</code> opcional. Se hai máis dun elemento na lista, a función devolve un erro.


## Examples

### Example #1 
Buscar o valor único da lista \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Buscar o valor único da lista \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Buscar o valor único da lista \{}. Se está baleira, devolve -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
