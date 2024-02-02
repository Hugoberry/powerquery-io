---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Retourne une liste qui supprime le nombre spécifié d&#39;éléments à la fin de la liste.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Retourne une liste qui supprime les <code>countOrCondition</code> derniers éléments à la fin de la liste <code>list</code>. Si <code>list</code> contient moins de <code>countOrCondition</code> éléments, une liste vide est retournée. <ul> <li>Si un nombre est spécifié, autant d'éléments sont supprimés. </li> <li>Si une condition est spécifiée, la liste retournée se termine par le premier élément à partir du bas dans <code>list</code> qui remplit le critère. Lorsqu'un élément ne remplit pas la condition, aucun autre élément n'est pris en compte. </li> <li>Si ce paramètre a la valeur Null, un seul élément est supprimé. </li> </ul>


## Examples

### Example #1 
Crée une liste à partir de \{1, 2, 3, 4, 5} sans les 3 derniers nombres.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Crée une liste à partir de \{5, 4, 2, 6, 4} qui se termine par un nombre inférieur à 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
