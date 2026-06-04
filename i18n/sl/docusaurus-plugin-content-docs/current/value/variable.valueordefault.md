---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Vrne vrednost določene spremenljivke ali privzeto vrednost, če spremenljivka ni določena.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Vrne vrednost določene spremenljivke `identifier`, ki je opredeljena s trenutnim okoljem vrednotenja. Če spremenljivka ni določena, je vrnjena izbirna vrednost `defaultValue`.



## Category
Values.Implementation
