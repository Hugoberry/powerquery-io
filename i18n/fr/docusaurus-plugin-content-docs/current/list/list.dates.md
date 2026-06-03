---
title: List.Dates
---

# List.Dates


Génère une liste de valeurs date en fonction d'une valeur initiale, d'un nombre et d'une valeur de durée incrémentielle.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Retourne une liste de valeurs `date` de taille `count`, démarrant par `start`. L'incrément spécifié, `step`, est une valeur `duration` qui est ajoutée à chaque valeur.


## Examples

### Example #1
Permet de créer une liste de 5 valeurs démarrant la veille du Jour de l’An (#date(2011, 12, 31)) par incréments de 1 jour(#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
