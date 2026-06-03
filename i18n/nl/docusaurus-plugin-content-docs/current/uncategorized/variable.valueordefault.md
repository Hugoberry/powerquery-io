---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Retourneert de waarde van de opgegeven variabele of de standaardwaarde, als de variabele niet is gedefinieerd.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Retourneert de waarde van de opgegeven variabele `identifier` die is gedefinieerd door de huidige evaluatieomgeving. Als de variabele niet is gedefinieerd, wordt de optionele `defaultValue` geretourneerd.



## Category
Values.Implementation
