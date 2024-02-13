---
title: List.Buffer
---

# List.Buffer


Armazena uma lista em buffer.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

Armazena a lista <code>list</code> em buffer na memória. O resultado desta chamada é uma lista estável.


## Examples

### Example #1 
Crie uma cópia estável da lista \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
