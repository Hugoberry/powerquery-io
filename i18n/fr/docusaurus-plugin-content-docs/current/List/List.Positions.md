---
title: List.Positions
---

# List.Positions


## Description

Retourne une liste de décalages pour l&#39;entrée.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Retourne une liste de décalages pour la liste d'entrée <code>list</code>.    Quand vous utilisez List.Transform pour changer une liste, la liste des positions peut être utilisée pour fournir à la transformation l'accès à la position.


## Examples

### Example #1 
Recherche les décalages des valeurs dans la liste \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
