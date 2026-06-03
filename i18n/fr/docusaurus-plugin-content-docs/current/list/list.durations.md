---
title: List.Durations
---

# List.Durations


Génère une liste de valeurs de durée en fonction d'une valeur initiale, d'un nombre et d'une valeur de durée incrémentielle.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Retourne une liste de valeurs `duration` `count`, commençant par `start` et incrémentée par le `duration` `step` spécifié.


## Examples

### Example #1
Crée une liste de 5 valeurs démarrant par 1 heure et par incréments d'une heure.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
