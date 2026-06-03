---
title: List.Modes
---

# List.Modes


Retourne la liste des valeurs les plus fréquentes dans la liste.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Renvoie les éléments qui apparaissent le plus fréquemment dans `list`. Si la liste est vide, une erreur est levée. Si plusieurs éléments apparaissent avec la même fréquence maximale, ils sont tous renvoyés. Vous pouvez spécifier une valeur de critère de comparaison facultative, `equationCriteria`, pour contrôler les tests d'égalité.


## Examples

### Example #1
Recherche les éléments qui apparaît le plus fréquemment dans la liste `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
