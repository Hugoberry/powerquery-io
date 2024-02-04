---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Devolve o único item existente numa lista de comprimento um e o valor predefinido para uma lista vazia.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Se só existir um item na lista <code>list</code>, devolve esse item.    Se a lista estiver vazia, a função devolve "null" a menos que seja especificado um <code>default</code> opcional. Se existir mais de um item na lista, a função devolve um erro.


## Examples

### Example #1 
Determinar o valor único na lista \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Determinar o valor único na lista \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Determinar o valor único na lista \{}. Se estiver vazia, devolver -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
