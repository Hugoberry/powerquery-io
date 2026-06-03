---
title: List.Numbers
---

# List.Numbers


Retourne une liste de nombres en fonction d'une valeur initiale, d'un nombre et d'une valeur incrémentielle facultative.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Renvoie une liste de nombres à partir d'une valeur initiale, d'un nombre d'éléments et d'une valeur d'incrément facultative. La valeur d'incrémentation par défaut est 1.

-   `start` : La valeur initiale dans la liste.
-   `count` : Le nombre de valeurs à créer.
-   `increment` : *(Facultatif)* La valeur d'incrémentation. Les valeurs omises sont incrémentées de 1.


## Examples

### Example #1
Génère une liste de 10 caractères consécutifs en partant de 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2
Génère une liste de 10 chiffres à partir de 1, avec un incrément de 2 pour chaque numéro suivant.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
