---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Returnează valoarea variabilei specificate sau valoarea implicită dacă variabila nu este definită.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Returnează valoarea variabilei specificate `identifier` definită de mediul de evaluare curent. Dacă variabila nu este definită, se returnează `defaultValue` opțional.



## Category
Values.Implementation
