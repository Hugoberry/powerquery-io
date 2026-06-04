---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Vraća vrednost navedene promenljive ili podrazumevanu vrednost ako promenljiva nije definisana.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Vraća vrednost navedene promenljive `identifier` definisane u trenutnom okruženju procene. Ako promenljiva nije definisana, vraća se opcionalna `defaultValue`.



## Category
Values.Implementation
