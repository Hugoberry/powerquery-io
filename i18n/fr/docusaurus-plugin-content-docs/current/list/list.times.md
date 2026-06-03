---
title: List.Times
---

# List.Times


Génère une liste de valeurs time en fonction d'une valeur initiale, d'un nombre et d'une valeur de durée incrémentielle.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Retourne une liste de valeurs `time` de taille `count`, en commençant par `start`. L'incrément spécifié, `step`, est une valeur `duration` qui est ajoutée à chaque valeur.


## Examples

### Example #1
Crée une liste de 4 valeurs en commençant à midi (#time(12, 0, 0)) par incréments de 1 heure (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
