---
title: List.Last
---

# List.Last


## Description

Devolve o último valor da lista ou a predefinição especificada se a lista estiver vazia.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Devolve o último item existente na lista <code>list</code> ou o valor predefinido opcional, <code>defaultValue</code>, se a lista estiver vazia.    Se a lista estiver vazia e não for especificado um valor predefinido, a função devolve <code>null</code>.


## Examples

### Example #1 
Determinar o último valor na lista \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Determinar o último valor na lista \{} ou -1 se a lista estiver vazia.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
