---
title: List.Last
---

# List.Last


## Description

Devolve o último valor da lista ou o valor predefinido especificado se está baleiro.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Devolve o último elemento da lista <code>list</code> ou o valor predefinido opcional, <code>defaultValue</code>, se a lista está baleira.    Se a lista está baleira e non se especifica ningún valor predefinido, a función devolve <code>null</code>.


## Examples

### Example #1 
Buscar o último valor da lista \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Buscar o último valor da lista \{} ou -1 se está baleira.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
