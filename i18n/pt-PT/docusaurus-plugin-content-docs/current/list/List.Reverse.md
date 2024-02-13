---
title: List.Reverse
---

# List.Reverse


Inverte a ordem dos valores na lista.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Devolve uma lista com os valores existentes na lista <code>list</code> por ordem inversa.


## Examples

### Example #1 
Criar uma lista na ordem inversa a partir de \{1..10}.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
