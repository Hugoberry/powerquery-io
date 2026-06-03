---
title: Number.Power
---

# Number.Power


Opløfter et tal til en angivet potens.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Returnerer resultatet af at opløfte `number` til potensen `power`. Hvis `number` eller `power` er null, returnerer `Number.Power` null.

-   `number`: Grundtallet.
-   `power`: Eksponenten.


## Examples

### Example #1
Find værdien for 5 opløftet til potensen 3 (5 i tredje potens).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
