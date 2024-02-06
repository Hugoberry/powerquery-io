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

Gibt das Ergebnis der Potenzierung von "<code>number</code>" mit "<code>power</code>" zurück.    Ist <code>number</code> oder <code>power</code> NULL, gibt <code>Number.Power</code> NULL zurück.      <ul>        <li><code>number</code>: Die Basis.</li>        <li><code>power</code>: Der Exponent.</li>      </ul>


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
