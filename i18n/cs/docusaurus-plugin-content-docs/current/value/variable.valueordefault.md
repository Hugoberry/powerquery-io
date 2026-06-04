---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Vrátí hodnotu zadané proměnné nebo výchozí hodnotu, pokud proměnná není definována.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Vrátí hodnotu zadané proměnné `identifier` definované aktuálním vyhodnocovacím prostředím. Pokud proměnná není definována, vrátí se volitelná hodnota `defaultValue`.



## Category
Values.Implementation
