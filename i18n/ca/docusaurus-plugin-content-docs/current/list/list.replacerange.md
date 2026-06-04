---
title: List.ReplaceRange
---

# List.ReplaceRange


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


## Remarks

Substitueix els valors `count` de `list` per la llista `replaceWith`, començant per la posició especificada, `index`.


## Examples

### Example #1
Substitueix \{7, 8, 9\} a la llista \{1, 2, 7, 8, 9, 5\} per \{3, 4\}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
