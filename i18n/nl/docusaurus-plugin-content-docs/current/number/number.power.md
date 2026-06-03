---
title: Number.Power
---

# Number.Power


Verheft een getal tot de opgegeven macht.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Hiermee wordt het resultaat van het verheffen van `number` tot de macht `power` geretourneerd. Als `number` of `power` null is, retourneert `Number.Power` null.

-   `number`: De basis.
-   `power`: De exponent.


## Examples

### Example #1
De waarde van 5 zoeken, verheven tot de macht 3 (5 tot de derde macht)
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
