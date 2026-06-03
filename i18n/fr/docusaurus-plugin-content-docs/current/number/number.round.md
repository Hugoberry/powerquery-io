---
title: Number.Round
---

# Number.Round


Retourne le nombre arrondi. Le nombre de chiffres et le mode d'arrondi peut être spécifié.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Retourne le résultat de l’arrondi `number` au nombre le plus proche. Si `number` a la valeur null, `Number.Round` retourne null.  
  
Par défaut, `number` est arrondi à l’entier le plus proche, et les liens sont rompus en arrondissant au nombre pair le plus proche (à l’aide de `RoundingMode.ToEven`, également appelé "arrondi bancaire").  
  
Toutefois, ces valeurs par défaut peuvent être remplacées par les paramètres facultatifs suivants.

-   `digits`Causes`number`: entraîne l’arrondissement au nombre spécifié de chiffres décimaux.
-   `roundingMode`: remplace le comportement de liaison par défaut lorsque `number` est au niveau du milieu entre deux valeurs arrondies potentielles (référez-vous à`RoundingMode.Type` pour connaître les valeurs possibles).


## Examples

### Example #1
Arrondit 1,234 à l'entier le plus proche.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Arrondit 1,56 à l'entier le plus proche.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Arrondit 1,2345 à deux décimales.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Arrondit 1,2345 à trois décimales (arrondi vers le chiffre supérieur).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Arrondit 1,2345 à trois décimales (arrondi vers le chiffre inférieur).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
