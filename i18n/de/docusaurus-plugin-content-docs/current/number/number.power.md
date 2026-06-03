---
title: Number.Power
---

# Number.Power


Potenziert eine Zahl mit dem angegebenen Wert.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Gibt das Ergebnis der Potenzierung von "`number`" mit "`power`" zurück. Ist `number` oder `power` NULL, gibt `Number.Power` NULL zurück.

-   `number`: Die Basis.
-   `power`: Der Exponent.


## Examples

### Example #1
Ermittelt den Wert von 5 hoch 3 (5 zum Kubik).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
