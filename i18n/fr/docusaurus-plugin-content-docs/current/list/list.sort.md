---
title: List.Sort
---

# List.Sort


Trie une liste de données selon les critères spécifiés.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Trie une liste de données, `list`, selon les critères facultatifs spécifiés. Un paramètre facultatif, `comparisonCriteria`, peut être spécifié comme critère de comparaison. Les valeurs suivantes peuvent être utilisées :

-   Pour contrôler l'ordre, le critère de comparaison peut être une valeur d'énumération d'ordre. (`Order.Descending`, `Order.Ascending`).
-   Pour calculer une clé utilisée pour le tri, une fonction d'1 argument peut être utilisée.
-   Pour sélectionner une clé et contrôler l'ordre, le critère de comparaison peut être une liste contenant la clé et l'ordre (`{each 1 / _, Order.Descending}`).
-   Pour contrôler complètement la comparaison, une fonction de 2 arguments peut être utilisée (comme Value.Compare). Cette fonction recevra deux éléments de la liste (deux éléments quelconques, dans n'importe quel ordre). La fonction doit renvoyer l'une des valeurs suivantes :
    -   `-1` : Le premier élément est inférieur au deuxième élément.
    -   `0` : Les éléments sont égaux.
    -   `1` : Le premier élément est supérieur au deuxième élément.


## Examples

### Example #1
Trie la liste \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Trie la liste \{2, 3, 1\} dans l'ordre décroissant.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Trie la liste \{2, 3, 1\} dans l'ordre décroissant en utilisant la méthode Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
