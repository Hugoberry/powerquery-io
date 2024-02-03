---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Substitueix el nombre del recompte de valors començant per la posició amb els valors de substitució.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

Substitueix els valors <code>count</code> de <code>list</code> per la llista <code>replaceWith</code>, començant per la posició especificada, <code>index</code>.


## Examples

### Example #1 
Substitueix \{7, 8, 9} a la llista \{1, 2, 7, 8, 9, 5} per \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
