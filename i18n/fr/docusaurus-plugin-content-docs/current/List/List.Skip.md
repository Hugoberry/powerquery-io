---
title: List.Skip
---

# List.Skip


## Description

Retourne une liste qui ignore le nombre spécifié d&#39;éléments au début de la liste.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Retourne une liste qui ignore le premier élément de la liste <code>list</code>. Si <code>list</code> est une liste vide, une liste vide est retournée.Cette option utilise un paramètre facultatif, <code>countOrCondition</code>, pour prendre en charge le saut de plusieurs valeurs telles que répertorié ci-dessous. <ul> <li>Si un nombre est spécifié, autant d'éléments sont ignorés. </li> <li>Si une condition est spécifiée, la liste retournée commence par le premier élément dans <code>list</code> qui remplit le critère. Quand un élément ne remplit pas la condition, aucun autre élément n'est pris en compte. </li> <li>Si ce paramètre a la valeur null, le comportement par défaut est observé. </li> </ul>


## Examples

### Example #1 
Crée une liste à partir de \{1, 2, 3, 4, 5} sans les 3 premiers nombres.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Crée une liste à partir de \{5, 4, 2, 6, 1} qui démarre par un nombre inférieur à 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
