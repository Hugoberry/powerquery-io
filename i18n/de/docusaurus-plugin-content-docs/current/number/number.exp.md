---
title: Number.Exp
---

# Number.Exp


Potenziert "e" mit dem angegebenen Wert.


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Remarks

Gibt das Ergebnis der Potenzierung von "e" mit `number` (Exponentialfunktion) zurück.

-   `number`: Ein `number`\-Wert, für den die Exponentialfunktion berechnet werden soll. Wenn `number` NULL ist, gibt `Number.Exp` NULL zurück.


## Examples

### Example #1
Setzt "e" in die dritte Potenz.
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
