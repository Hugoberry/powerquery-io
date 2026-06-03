---
title: Number.RoundDown
---

# Number.RoundDown


Retourne le nombre supérieur précédent. Le nombre de chiffres peut être spécifié.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Renvoie le résultat de l'arrondi`number` au nombre entier précédent le plus élevé. Si `number` est null, cette fonction renvoie null. Si `digits` est fourni, `number` est arrondi au nombre de chiffres décimaux spécifié.


## Examples

### Example #1
Arrondit au chiffre inférieur 1,234 à un entier.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Arrondit au chiffre inférieur 1,999 à un entier.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3
Arrondit 1,999 au nombre inférieur à deux décimales.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
