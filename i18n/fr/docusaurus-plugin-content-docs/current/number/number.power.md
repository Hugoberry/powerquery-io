---
title: Number.Power
---

# Number.Power


Élève un nombre à la puissance spécifiée.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Retourne le résultat de l'élévation de `number` à la puissance `power`. Si `number` ou `power` ont la valeur null, `Number.Power` retourne null.

-   `number` : base.
-   `power` : exposant.


## Examples

### Example #1
Recherche la valeur 5 élevée à la puissance 3 (5 au cube).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
