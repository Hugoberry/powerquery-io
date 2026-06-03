---
title: List.InsertRange
---

# List.InsertRange


Insère des valeurs dans une liste à l'index spécifié.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Retourne une nouvelle liste générée par l'insertion de valeurs dans `values` dans `list` à `index`. La première la position dans la liste est à l'index 0.

-   `list` : liste cible où les valeurs doivent être insérées.
-   `index` : index de la liste cible (`list`) où les valeurs doivent être insérées. La première la position dans la liste est à l'index 0.
-   `values` : liste des valeurs qui doivent être insérées dans `list`.


## Examples

### Example #1
Insère la liste (\{3, 4\}) dans la liste cible (\{1, 2, 5\}) à l'index 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2
Insère une liste avec une liste imbriquée (\{1, \{1.1, 1.2\}\}) dans une liste cible (\{2, 3, 4\}) à l'index 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
