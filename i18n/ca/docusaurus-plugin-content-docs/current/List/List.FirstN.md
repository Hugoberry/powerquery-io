---
title: List.FirstN
---

# List.FirstN


## Description

Retorna el primer conjunt d&#39;elements de la llista especificant quants elements s&#39;han de retornar o una condició qualificada.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Si s'especifica un nombre, es retorna el mateix nombre d'elements com a màxim. </li>  <li>Si s'especifica una condició, es retornen tots els elements que inicialment compleixen la condició. Quan un element no compleixi la condició, no es consideraran més elements. </li> </ul>


## Examples

### Example #1 
Troba els valors inicials de la llista \{3, 4, 5, -1, 7, 8, 2} que són més grans que 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
