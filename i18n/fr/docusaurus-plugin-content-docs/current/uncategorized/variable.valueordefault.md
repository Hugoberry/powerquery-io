---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Renvoie la valeur de la variable spécifiée ou la valeur par défaut si la variable n'est pas définie.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Renvoie la valeur de la variable spécifiée `identifier` définie par l'environnement d'évaluation actuel. Si la variable n'est pas définie, l'option facultative `defaultValue` est renvoyée.



## Category
Values.Implementation
