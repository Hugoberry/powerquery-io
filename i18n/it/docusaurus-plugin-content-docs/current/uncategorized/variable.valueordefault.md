---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Restituisce il valore della variabile specificata o il valore predefinito se la variabile non è definita.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Restituisce il valore della variabile specificata `identifier` definita dall'ambiente di valutazione corrente. Se la variabile non è definita, viene restituito l'elemento `defaultValue` facoltativo.



## Category
Values.Implementation
