---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Devolve o valor da variável especificada ou o valor predefinido se a variável não estiver definida.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Devolve o valor da variável especificada `identifier` definida pelo ambiente de avaliação atual. Se a variável não estiver definida, é devolvido o valor opcional `defaultValue`.



## Category
Values.Implementation
