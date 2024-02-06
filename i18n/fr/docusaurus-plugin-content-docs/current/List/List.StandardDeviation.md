---
title: List.StandardDeviation
---

# List.StandardDeviation


Retourne un exemple en fonction de l&#39;estimation de l&#39;écart type.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Retourne une estimation de l'écart type des valeurs de la liste, <code>numbersList</code>, sur la base d'un échantillon.    Si <code>numbersList</code> est une liste de nombres, un nombre est retourné.    Une exception est levée en cas de liste vide ou d'une liste d'éléments qui n'est pas de type <code>number</code>.


## Examples

### Example #1 
Recherche l&#39;écart type des numéros 1 à 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
