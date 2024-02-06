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

Retourne le résultat de l'élévation de <code>number</code> à la puissance <code>power</code>.    Si <code>number</code> ou <code>power</code> ont la valeur null, <code>Number.Power</code> retourne null.      <ul>        <li><code>number</code> : base.</li>        <li><code>power</code> : exposant.</li>      </ul>


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
