---
title: List.First
---

# List.First


## Description

Devolve o primeiro valor da lista ou o valor predefinido especificado se está baleiro.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Devolve o primeiro elemento da lista <code>list</code> ou o valor predefinido opcional, <code>defaultValue</code>, se a lista está baleira.    Se a lista está baleira e non se especifica ningún valor predefinido, a función devolve <code>null</code>.


## Examples

### Example #1 
Buscar o primeiro valor da lista \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Buscar o primeiro valor da lista \{}. Se a lista está baleira, devolve -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
