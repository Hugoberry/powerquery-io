---
title: List.Mode
---

# List.Mode


Retourne la valeur la plus fréquente dans la liste.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Renvoie l'élément qui apparaît le plus fréquemment dans `list`. Si la liste est vide, une erreur est levée. Si plusieurs éléments apparaissent avec la même fréquence maximale, le dernier est choisi. Vous pouvez spécifier une valeur de critère de comparaison facultative, `equationCriteria`, pour contrôler les tests d'égalité.


## Examples

### Example #1
Recherche l'élément qui apparaît le plus fréquemment dans la liste `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Recherche l'élément qui apparaît le plus fréquemment dans la liste `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
