---
title: List.Repeat
---

# List.Repeat


## Description

Retorna una llista que té un recompte de repeticions de la llista original.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Retorna una llista que té <code>count</code> repeticions de la llista original, <code>list</code>.


## Examples

### Example #1 
Crea un llista que té \{1, 2} repetit 3 vegades.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
