---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


A megadott változó értékét vagy az alapértelmezett értéket adja vissza, ha a változó nincs definiálva.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Az aktuális kiértékelési környezet által definiált `identifier` megadott változó értékét adja vissza. Ha a változó nincs definiálva, a nem kötelező `defaultValue` értéket adja vissza.



## Category
Values.Implementation
