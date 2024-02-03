---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Suprimeix el nombre del recompte de valors començant per la posició especificada.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Suprimeix els valors <code>count</code> de <code>list</code> començant per la posició especificada, <code>index</code>.


## Examples

### Example #1 
Suprimeix 3 valors de la llista \{1, 2, 3, 4, -6, -2, -1, 5} començant per l&#39;índex 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
