---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Devolve o valor da variable especificada ou o valor predeterminado se a variable non está definida.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Devolve o valor da variable `identifier` especificada definida polo ambiente de avaliación actual. Se a variable non está definida, devólvese a opción `defaultValue` .



## Category
Values.Implementation
