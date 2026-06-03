---
title: List.StandardDeviation
---

# List.StandardDeviation


Retourne un exemple en fonction de l'estimation de l'écart type.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Retourne une estimation de l'écart type des valeurs de la liste, `numbersList`, sur la base d'un échantillon. Si `numbersList` est une liste de nombres, un nombre est retourné. Une erreur est levée en cas de liste vide ou d'une liste d'éléments qui n'est pas de type `number`.


## Examples

### Example #1
Recherche l'écart type des numéros 1 à 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
