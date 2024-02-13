---
title: List.IsEmpty
---

# List.IsEmpty


Devolve true se a lista estiver vazia.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Devolve <code>true</code> se a lista, <code>list</code>, não contiver valores (comprimento 0). Se a lista contiver valores (comprimento > 0), devolve <code>false</code>.


## Examples

### Example #1 
Determinar se a lista \{} está vazia.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se a lista \{1, 2} está vazia.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
