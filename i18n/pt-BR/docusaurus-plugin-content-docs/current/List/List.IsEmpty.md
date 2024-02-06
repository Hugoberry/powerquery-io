---
title: List.IsEmpty
---

# List.IsEmpty


Retornará true se a lista estiver vazia.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Retornará <code>true</code> se a lista <code>list</code> não contiver nenhum valor (comprimento 0). Se a lista contiver valores (comprimento > 0), <code>false</code> será retornado.


## Examples

### Example #1 
Descubra se a lista \{} está vazia.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Descubra se a lista \{1, 2} está vazia.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
