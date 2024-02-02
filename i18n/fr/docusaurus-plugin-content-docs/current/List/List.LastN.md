---
title: List.LastN
---

# List.LastN


## Description

Retourne la dernière valeur dans la liste.  Peut éventuellement spécifier le nombre de valeurs à retourner ou une condition éligible.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Retourne le dernier élément de la liste <code>list</code>. Si la liste est vide, une exception est levée. Cette option utilise un paramètre facultatif, <code>countOrCondition</code>, pour prendre en charge le regroupement de plusieurs éléments ou d'éléments de filtrage. <code>countOrCondition</code> peut être spécifié de trois manières : <ul>  <li>Si un nombre est spécifié, autant d'éléments sont retournés. </li>  <li>Si une condition est spécifiée, tous les éléments qui satisfont initialement la condition sont retournés, démarrant à la fin de la liste. Lorsqu'un élément ne remplit pas la condition, aucun autre élément n'est pris en compte. </li>  <li>Si le paramètre a la valeur null, le dernier élément dans la liste est retourné.</li> </ul>


## Examples

### Example #1 
Recherche la dernière valeur dans la liste \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Recherche les dernières valeurs dans la liste \{3, 4, 5, -1, 7, 8, 2} qui sont supérieures à 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
