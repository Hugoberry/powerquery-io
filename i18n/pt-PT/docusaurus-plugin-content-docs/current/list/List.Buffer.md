---
title: List.Buffer
---

# List.Buffer


Coloca uma lista na memória intermédia.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

Coloca a lista <code>list</code> na memória intermédia. O resultado desta chamada é uma lista estável.


## Examples

### Example #1 
Criar uma cópia estável da lista \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
