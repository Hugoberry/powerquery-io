---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Suprimeix els elements de list1 que estan presents a la llista.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Suprimeix totes les aparicions dels valors donats a <code>list2</code> des de <code>list1</code>. Si els valors de <code>list2</code> no existeixen a <code>list1</code>, es retorna la llista original.


## Examples

### Example #1 
Suprimeix els elements de la llista \{2, 4, 6} a partir de la llista \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
