---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Elimină numărul de valori începând de la poziţia specificată.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Elimină valorile <code>count</code> din <code>list</code> începând de la poziţia specificată, <code>index</code>.


## Examples

### Example #1 
Eliminaţi 3 valori din lista \{1, 2, 3, 4, -6, -2, -1, 5} începând de la indexul 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
