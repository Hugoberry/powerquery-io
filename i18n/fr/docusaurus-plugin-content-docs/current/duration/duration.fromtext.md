---
title: Duration.FromText
---

# Duration.FromText


Retourne une valeur de durée à partir d'un format textuel de temps écoulé (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Renvoie une valeur de durée à partir du texte spécifié, `text`. Les formats suivants peuvent être analysés par cette fonction :

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Toutes les plages sont inclusives)

-   ddd : Nombre de jours.
-   hh : Nombre d'heures, entre 0 et 23.
-   mm : Nombre de minutes, entre 0 et 59.
-   ss : Nombre de secondes, entre 0 et 59.
-   ff : Fraction de seconde, entre 0 et 9 999 999.


## Examples

### Example #1
Convertit `"2.05:55:20"` dans une valeur `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
