---
title: List.First
---

# List.First


## Description

Devolve o primeiro valor da lista ou a predefinição especificada se a lista estiver vazia.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Devolve o primeiro item existente na lista <code>list</code> ou o valor predefinido opcional, <code>defaultValue</code>, se a lista estiver vazia.    Se a lista estiver vazia e não for especificado um valor predefinido, a função devolve <code>null</code>.


## Examples

### Example #1 
Determinar o primeiro valor na lista \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Determinar o primeiro valor na lista \{}. Se a lista estiver vazia, devolver -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
