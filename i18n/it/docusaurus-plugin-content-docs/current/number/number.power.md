---
title: Number.Power
---

# Number.Power


Eleva un numero alla potenza specificata.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Restituisce il risultato dell'elevazione di `number` alla potenza di `power`. Se `number` o `power` è Null, `Number.Power` restituisce Null.

-   `number`: base.
-   `power`: esponente.


## Examples

### Example #1
Trovare il valore di 5 elevato alla potenza di 3 (5 al cubo).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
