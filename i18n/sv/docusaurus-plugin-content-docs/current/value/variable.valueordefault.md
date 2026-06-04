---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Returnerar värdet för den angivna variabeln eller standardvärdet om variabeln inte har definierats.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Returnerar värdet för den angivna variabeln `identifier` som definieras av den aktuella utvärderingsmiljön. Om variabeln inte har definierats returneras valfria `defaultValue`.



## Category
Values.Implementation
