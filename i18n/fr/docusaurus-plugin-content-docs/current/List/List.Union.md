---
title: List.Union
---

# List.Union


## Description

Retourne l&#39;union des valeurs de liste trouvées dans l&#39;entrée.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Prend une liste de listes <code>lists</code>, unit les éléments en listes individuelles et les retourne dans la liste de sortie. Par conséquent, la liste retournée contient tous les éléments de toutes les listes d'entrée.    Cette opération utilise la sémantique multiensemble, ainsi les doublons sont mis en correspondance dans le cadre de l'union.    La valeur du critère d'équation facultatif, <code>equationCriteria</code>, peut être spécifiée pour contrôler le test d'égalité. 


## Examples

### Example #1 
Crée une union de la liste \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
