---
title: List.Reverse
---

# List.Reverse


Reverte a ordem dos valores na lista.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Retorna uma lista com os valores da lista <code>list</code> na ordem inversa.


## Examples

### Example #1 
Crie uma lista a partir de \{1..10} na ordem inversa.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
